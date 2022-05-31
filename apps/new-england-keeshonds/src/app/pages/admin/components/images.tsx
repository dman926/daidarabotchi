import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
} from '@daidarabotchi/material-ui';
import {
  Gallery,
  Uploader,
  useFirebase,
} from '@daidarabotchi/new-england-keeshonds-lib';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import FolderIcon from '@mui/icons-material/Folder';

interface Image {
  name: string;
  url: string;
}

function Images() {
  const [showCustomFolder, setShowCustomFolder] = useState(false);
  const [customFolder, setCustomFolder] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string | undefined>(
    undefined
  );
  const [firebaseStorageFolders, setFirebaseStorageFolders] = useState<
    string[] | undefined
  >();
  const [firebaseStorageImages, setFirebaseStorageImages] = useState<
    Image[] | undefined
  >();
  const firebase = useFirebase();
  const firebaseStorage = useMemo(() => firebase.storage, [firebase]);

  const handleUpload = useCallback(
    (
      files: FileList,
      setUploadPercent: Dispatch<SetStateAction<number>>,
      onUpload: () => void
    ) => {
      for (let i = 0; i < files.length; i += 1) {
        setUploadPercent(0);
        const file = files[i];
        // eslint-disable-next-line no-new
        new Promise<void>((resolve) => {
          const firebaseStorageRef = ref(
            firebaseStorage,
            `${selectedFolder}/${file.name}`
          );
          const uploadTask = uploadBytesResumable(firebaseStorageRef, file);
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadPercent(progress);
            },
            () => {},
            () => {
              onUpload();
              resolve();
            }
          );
        });
      }
    },
    [firebaseStorage, selectedFolder]
  );

  const handleCustomFolder = useCallback((setFolder?: string) => {
    setShowCustomFolder((curState) => {
      if (curState) {
        setSelectedFolder(setFolder);
      }
      return !curState;
    });
  }, []);

  useEffect(() => {
    const galleryListRef = ref(firebaseStorage, selectedFolder);
    listAll(galleryListRef)
      .then((res) => {
        setFirebaseStorageFolders(
          res.prefixes.map((folder) => folder.fullPath)
        );
        // convert images to download urls
        Promise.all(
          res.items.map(
            (image) =>
              new Promise<Image>((resolve, reject) => {
                getDownloadURL(ref(firebaseStorage, image.fullPath))
                  .then((url) => {
                    resolve({
                      name: image.name,
                      url,
                    });
                  })
                  .catch((err) => {
                    reject(err);
                  });
              })
          )
        ).then((images) => {
          setFirebaseStorageImages(images);
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, [firebaseStorage, selectedFolder]);

  return (
    <Container data-testid="image-area">
      <Uploader onUpload={handleUpload} />
      <IconButton
        onClick={() => {
          handleCustomFolder();
        }}
      >
        <FolderIcon />
      </IconButton>
      {showCustomFolder && (
        <Box>
          <TextField
            label="Folder"
            value={customFolder}
            onChange={(event) => {
              setCustomFolder(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              handleCustomFolder(customFolder);
            }}
          >
            Set Folder
          </Button>
        </Box>
      )}
      <Gallery onFolderSelect={setCustomFolder} />
    </Container>
  );
}

export default Images;
