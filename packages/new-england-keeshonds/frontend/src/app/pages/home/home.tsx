import { useCallback, useEffect, useMemo, useState } from 'react';
import { Backdrop, Box, Container, Grid, Typography } from '@mui/material';
import { useFirebase } from 'firebase-react';
import { useMediaQuery, useTheme } from '@mui/material';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

import { CallToAction } from '../../../components/home/call-to-action/call-to-action';
import { ContactForm } from '../../../components/home/contact-form/contact-form';
import { Gallery } from '../../../components/shared/gallery/gallery';
import { Page } from '../../../components/pages/page/page';
import { Image } from '../../../components/core/image/image';
import type { Image as ImageI } from '../../../interfaces/image';

import AllDogsImage from '../../../assets/dogs/all_dogs.jpg';
import WillowImage from '../../../assets/dogs/willow.jpg';
import MiloImage from '../../../assets/dogs/milo.jpg';
import BellaImage from '../../../assets/dogs/bella.jpg';

// @TODO: fill out the description more
// @TOOD: make this dynamic
const DOGS: {
  name: string;
  description: string;
  img: string;
}[] = [
  {
    name: 'Willow',
    description: 'Willow is a happy girl. Very loyal and always by my side.',
    img: WillowImage,
  },
  {
    name: 'Milo',
    description:
      "Milo is quick on his feet. Loves to play fetch and thinks he's a lap dog.",
    img: MiloImage,
  },
  {
    name: 'Bella',
    description:
      'Bella is full of life. Always playful, and the first in line for belly rubs.',
    img: BellaImage,
  },
];

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [galleryImages, setGalleryImages] = useState<ImageI[] | undefined>();
  const [focusedImage, setFocusedImage] = useState<ImageI | boolean>(false);
  const firebase = useFirebase();
  const firebaseStorage = useMemo(() => firebase.storage, [firebase]);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const loadImages = useCallback(() => {
    setGalleryImages(undefined);
    const galleryListRef = ref(firebaseStorage, 'dogs');
    listAll(galleryListRef)
      .then((res) => {
        // @TODO: make this better by handling errors caused by missing thumbnails
        Promise.all(
          res.items.map((image) =>
            Promise.all([
              Promise.resolve(image.name),
              getDownloadURL(
                ref(
                  firebaseStorage,
                  `dogs/thumbnails/${image.name.substring(
                    0,
                    image.name.lastIndexOf('.')
                  )}_256x256.webp`
                )
              ),
              getDownloadURL(
                ref(
                  firebaseStorage,
                  `dogs/thumbnails/${image.name.substring(
                    0,
                    image.name.lastIndexOf('.')
                  )}_256x256.jpeg`
                )
              ),
            ])
          )
        ).then((images) => {
          setGalleryImages(
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
  }, [firebaseStorage]);

  const handleImageSelect = useCallback(
    (image: string) => {
      setFocusedImage(true);
      getDownloadURL(ref(firebaseStorage, `dogs/${image}`)).then((url) => {
        setFocusedImage({ name: image, url });
      });
    },
    [firebaseStorage]
  );

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <Page testid="home-wrapper">
      <Container>
        <CallToAction
          img={
            <img
              src={AllDogsImage}
              alt="Willow, Milo, and Bella"
              placeholder="blur"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
              }}
            />
          }
        >
          {DOGS.map((dog) => {
            let imgSize = 256;
            if (sm) {
              imgSize = 64;
            } else if (md) {
              imgSize = 128;
            }

            return (
              <Grid container key={dog.name}>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: 'grid',
                      placeContent: 'center',
                      paddingBottom: '0.25em',
                      paddingRight: '0.25em',
                      height: '100%',
                    }}
                  >
                    <img
                      src={dog.img}
                      alt={`${dog.name}`}
                      placeholder="blur"
                      width={imgSize}
                      height={imgSize}
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h4" sx={{ marginTop: sm ? 0 : 1 }}>
                    {dog.name}
                  </Typography>
                  <Typography>{dog.description}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </CallToAction>
      </Container>
      <Container maxWidth={false}>
        <Gallery images={galleryImages} onImageSelect={handleImageSelect} />
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={Boolean(focusedImage)}
          onClick={() => {
            setFocusedImage(false);
          }}
        >
          {focusedImage && focusedImage !== true && (
            <Image src={focusedImage.url} alt={focusedImage.name} />
          )}
        </Backdrop>
      </Container>
      <Container maxWidth="xs">
        <ContactForm head="Get A Hold Of Me" />
      </Container>
    </Page>
  );
}

export default Home;
