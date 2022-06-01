/* 
@TODO: wrap images in an error boundary for if
(more like when) firebase errors out loading the thumbnails
*/

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
  useRef,
  useState,
} from 'react';
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RefreshIcon from '@mui/icons-material/Refresh';

function Images() {
  const [refreshDisabled, setRefreshDisabled] = useState(false);
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
  const folderInput = useRef<HTMLInputElement>(null);
  const firebase = useFirebase();
  const firebaseStorage = useMemo(() => firebase.storage, [firebase]);

  const loadImages = useCallback(() => {
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
        // @TODO: make this better by handling errors caused by missing thumbnails
        // convert images to download urls
        Promise.all(
          res.items.map((image) =>
            Promise.all([
              Promise.resolve(image.name),
              getDownloadURL(
                ref(
                  firebaseStorage,
                  `${selectedFolder}/thumbnails/${image.name.substring(
                    0,
                    image.name.lastIndexOf('.')
                  )}_256x256.webp`
                )
              ),
              getDownloadURL(
                ref(
                  firebaseStorage,
                  `${selectedFolder}/thumbnails/${image.name.substring(
                    0,
                    image.name.lastIndexOf('.')
                  )}_256x256.jpeg`
                )
              ),
            ])
          )
        ).then((images) => {
          setFirebaseStorageImages(
            images.map((image) => ({
              name: image[0],
              url: image[1],
              fallback: image[2],
            }))
          );
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, [firebaseStorage, selectedFolder]);

  const handleUpload = useCallback(
    (
      files: FileList,
      setUploadPercent: Dispatch<SetStateAction<number>>,
      onUpload: () => void
    ) => {
      setRefreshDisabled(true);
      return Promise.all(
        Array.from(files).map(
          (file) =>
            new Promise<void>((resolve) => {
              setUploadPercent(0);
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
                  console.log(progress);
                },
                () => {},
                () => {
                  onUpload();
                  console.log('uploaded');
                  resolve();
                }
              );
            })
        )
      );
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

  const handleDelete = useCallback(() => {
    if (typeof focusedImage === 'object') {
      // Delete image and thumbnails
      Promise.all([
        deleteObject(
          ref(firebaseStorage, `${selectedFolder}/${focusedImage.name}`)
        ),
        deleteObject(
          ref(
            firebaseStorage,
            `${selectedFolder}/thumbnails/${focusedImage.name.substring(
              0,
              focusedImage.name.lastIndexOf('.')
            )}_256x256.webp`
          )
        ),
        deleteObject(
          ref(
            firebaseStorage,
            `${selectedFolder}/thumbnails/${focusedImage.name.substring(
              0,
              focusedImage.name.lastIndexOf('.')
            )}_256x256.jpeg`
          )
        ),
      ]).then(() => {
        setFocusedImage(undefined);
        loadImages();
      });
    }
  }, [firebaseStorage, focusedImage, loadImages, selectedFolder]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    if (showCustomFolder && folderInput.current) {
      folderInput.current.focus();
    }
  }, [showCustomFolder]);

  return (
    <Container data-testid="image-area">
      <Uploader
        onUpload={handleUpload}
        onFinishUpload={() =>
          setTimeout(() => {
            setRefreshDisabled(false);
            loadImages();
          }, 2500)
        }
      />
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
            inputRef={folderInput}
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
      <IconButton onClick={loadImages} disabled={refreshDisabled}>
        <RefreshIcon />
      </IconButton>
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
            <>
              <IconButton
                onClick={handleDelete}
                sx={{
                  position: 'absolute',
                  top: 1,
                  right: 1,
                }}
              >
                <DeleteForeverIcon htmlColor="white" />
              </IconButton>
              <img
                src={focusedImage.url}
                loading="lazy"
                alt={focusedImage.name}
              />
            </>
          ))}
      </Dialog>
    </Container>
  );
}

export default Images;
