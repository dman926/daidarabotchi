import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Backdrop,
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  IconButton,
  styled,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useFirebase } from 'firebase-react';
import { useMediaQuery, useTheme } from '@mui/material';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

import { CallToAction } from '../../../components/home/call-to-action/call-to-action';
import { ContactForm } from '../../../components/home/contact-form/contact-form';
import { Gallery } from '../../../components/shared/gallery/gallery';
import { Page } from '../../../components/pages/page/page';
import { Image } from '../../../components/core/image/image';
import { AnimatedDownScrollCircle } from '../../../components/shared/animated-down-scroll-circle/animated-down-scroll-circle';
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

const ABOUT_ME_TEXT = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
 Faucibus nisl tincidunt eget nullam non nisi est. Odio aenean sed adipiscing diam.\
 Amet massa vitae tortor condimentum lacinia quis vel eros donec.\
 Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.\
 Donec ac odio tempor orci dapibus ultrices in iaculis nunc.\
 Facilisis leo vel fringilla est ullamcorper. Integer enim neque volutpat ac tincidunt.\
 In fermentum posuere urna nec tincidunt praesent. Elementum integer enim neque volutpat ac.`,
  `Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.\
 Lorem ipsum dolor sit amet consectetur adipiscing.\
 Orci sagittis eu volutpat odio facilisis mauris sit amet massa.\
 Bibendum neque egestas congue quisque egestas diam. Semper eget duis at tellus at.\
 Neque sodales ut etiam sit amet nisl purus in.\
 Elit ut aliquam purus sit amet luctus venenatis lectus.\
 Aliquet sagittis id consectetur purus ut faucibus pulvinar.\
 Vitae elementum curabitur vitae nunc sed velit dignissim sodales.\
 Mi sit amet mauris commodo quis imperdiet massa.\
 Ultrices in iaculis nunc sed augue lacus viverra vitae congue.\
 Dui faucibus in ornare quam viverra orci sagittis. Sollicitudin aliquam ultrices sagittis orci.\
 Eros donec ac odio tempor orci dapibus ultrices. Et odio pellentesque diam volutpat commodo sed egestas.`,
  `In fermentum posuere urna nec tincidunt praesent. Ullamcorper a lacus vestibulum sed arcu non.\
 Vitae ultricies leo integer malesuada nunc. Scelerisque purus semper eget duis at tellus at urna.\
 Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat.\
 Vulputate sapien nec sagittis aliquam malesuada. Tellus id interdum velit laoreet.\
 Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.\
 Tellus elementum sagittis vitae et leo duis ut. Tristique senectus et netus et malesuada fames.`,
];

const BlankIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': { backgroundColor: 'transparent' },
  '&:focus': { backgroundColor: theme.palette.action.hover },
}));

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [galleryImages, setGalleryImages] = useState<ImageI[] | undefined>();
  const [focusedImage, setFocusedImage] = useState<ImageI | boolean>(false);
  const firebase = useFirebase();
  const firebaseStorage = useMemo(() => firebase.storage, [firebase]);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const navigate = useNavigate();
  const galleryRef = useRef<HTMLDivElement>(null);

  const loadImages = useCallback(() => {
    setGalleryImages(undefined);
    const galleryListRef = ref(firebaseStorage, 'dogs');
    listAll(galleryListRef)
      .then((res) => {
        // @TODO: make this better by handling errors caused by missing thumbnails
        // And handle cancelling when needed
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
        console.error(err);
        // @TODO: Properly handle this
      });
  }, [firebaseStorage]);

  const handleImageSelect = useCallback(
    (image: string) => {
      setFocusedImage(true);
      getDownloadURL(ref(firebaseStorage, `dogs/${image}`))
        .then((url) => {
          setFocusedImage({ name: image, url });
        })
        .catch((err) => {
          console.error(err);
          // @TODO: Properly handle this
        });
    },
    [firebaseStorage]
  );

  const handleDownScroll = useCallback(() => {
    navigate('/#gallery', {
      state: {
        behavior: 'smooth',
      },
    });
  }, [navigate]);

  useEffect(() => {
    const { behavior } = location.state || { behavior: 'instant' };
    const targetEl = galleryRef.current;
    if (location.hash === '#gallery' && targetEl) {
      targetEl.scrollIntoView({ behavior, block: 'start' });
    }
  }, [location]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <Page testid="home-wrapper">
      <Typography
        variant="h1"
        fontSize={38}
        textAlign="center"
        alignItems="center"
      >
        <PetsIcon />
        &nbsp;New England Keeshonds&nbsp;
        <PetsIcon />
      </Typography>
      <Divider flexItem>
        <BlankIconButton disableFocusRipple onClick={handleDownScroll}>
          <AnimatedDownScrollCircle />
        </BlankIconButton>
      </Divider>
      <Container maxWidth="xl">
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
      <Container maxWidth="lg">
        <Paper
          elevation={4}
          sx={{ padding: '1em' }}
          data-testid="nek-home-about-me"
        >
          <Typography variant="h5" align="center">
            About Me
          </Typography>
          {ABOUT_ME_TEXT.map((text, i) => (
            <Typography
              variant="body1"
              key={`about_me_section_${i + 1}`}
              paragraph
            >
              {text}
            </Typography>
          ))}
        </Paper>
      </Container>
      <Container maxWidth="xs">
        <ContactForm head="Get A Hold Of Me" />
      </Container>
      <Container maxWidth={false} ref={galleryRef}>
        <Gallery images={galleryImages} onImageSelect={handleImageSelect} />
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={Boolean(focusedImage)}
          onClick={() => {
            setFocusedImage(false);
          }}
        >
          {/* @TODO: Video support */}
          {focusedImage && focusedImage !== true && (
            <Image src={focusedImage.url} alt={focusedImage.name} />
          )}
        </Backdrop>
      </Container>
    </Page>
  );
}

export default Home;
