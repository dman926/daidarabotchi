import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from '@daidarabotchi/material-ui';
import {
  Gallery,
  Uploader,
  useFirebase,
  Image,
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Images() {
  const [showCustomFolder, setShowCustomFolder] = useState(false);
  const [customFolder, setCustomFolder] = useState('');
  const [customFolderDisable, setCustomFolderDisable] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<string | undefined>(
    undefined
  );
  const [focusedImage, setFocusedImage] = useState<
    Image | boolean | undefined
  >();
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

  const handleImageSelect = useCallback(
    (image: string) => {
      setFocusedImage(true);
      getDownloadURL(ref(firebaseStorage, `${selectedFolder}/${image}`)).then(
        (url) => {
          setFocusedImage({ name: image, url });
        }
      );
    },
    [firebaseStorage, selectedFolder]
  );

  useEffect(() => {
    setFirebaseStorageFolders(undefined);
    setFirebaseStorageImages(undefined);
    const galleryListRef = ref(firebaseStorage, selectedFolder);
    listAll(galleryListRef)
      .then((res) => {
        setFirebaseStorageFolders(
          res.prefixes
            .filter((folder) => folder.name !== 'thumbnails')
            .map((folder) => folder.fullPath)
        );
        // convert images to download urls
        Promise.all(
          res.items.map(
            (image) =>
              new Promise<Image>((resolve, reject) => {
                getDownloadURL(
                  ref(
                    firebaseStorage,
                    `${selectedFolder}/thumbnails/${image.name.substring(
                      0,
                      image.name.lastIndexOf('.')
                    )}_256x256.webp`
                  )
                )
                  .then((url) => {
                    getDownloadURL(
                      ref(
                        firebaseStorage,
                        `${selectedFolder}/thumbnails/${image.name.substring(
                          0,
                          image.name.lastIndexOf('.')
                        )}_256x256.jpeg`
                      )
                    )
                      .then((fallback) => {
                        resolve({
                          name: image.name,
                          url,
                          fallback,
                        });
                      })
                      .catch((err) => {
                        reject(err);
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
          <Typography>
            Warning! Do not use &quot;thumbnails&quot; for the folder image
          </Typography>
          <TextField
            label="Folder"
            value={customFolder}
            onChange={(event) => {
              setCustomFolder(event.target.value);
              setCustomFolderDisable(event.target.value === 'thumbnails');
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              handleCustomFolder(customFolder);
            }}
            disabled={customFolderDisable}
          >
            Set Folder
          </Button>
        </Box>
      )}
      {selectedFolder && (
        <IconButton
          onClick={() => {
            setSelectedFolder((curFolder) =>
              curFolder?.substring(0, curFolder?.lastIndexOf('/'))
            );
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <Gallery
        folders={firebaseStorageFolders}
        images={firebaseStorageImages}
        onFolderSelect={setSelectedFolder}
        onImageSelect={handleImageSelect}
      />
      <Dialog
        open={Boolean(focusedImage)}
        onClose={() => {
          setFocusedImage(undefined);
        }}
      >
        {focusedImage &&
          (typeof focusedImage === 'boolean' ? (
            <Typography sx={{ padding: 1 }}>Loading Image...</Typography>
          ) : (
            <img
              src={focusedImage.url}
              loading="lazy"
              alt={focusedImage.name}
            />
          ))}
      </Dialog>
    </Container>
  );
}

export default Images;
