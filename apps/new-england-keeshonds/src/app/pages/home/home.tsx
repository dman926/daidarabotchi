import { Box, Container, Grid, Typography } from '@daidarabotchi/material-ui';
import {
  CallToAction,
  ContactForm,
  Gallery,
  Login,
  Page,
  useFirebase,
} from '@daidarabotchi/new-england-keeshonds-lib';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { listAll, ref } from 'firebase/storage';

import AllDogsImage from '../../../assets/dogs/all_dogs.jpg';
import WillowImage from '../../../assets/dogs/willow.jpg';
import MiloImage from '../../../assets/dogs/milo.jpg';
import BellaImage from '../../../assets/dogs/bella.jpg';

// @TODO: fill out the description more
// @TOOD: make this dynamic through functions
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
  const [galleryImages, setGalleryImages] = useState();
  const firebase = useFirebase();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const galleryListRef = ref(firebase.storage, 'abc');

    listAll(galleryListRef)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
        // setGalleryImages(res.items);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, [firebase.storage]);

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
        <Gallery />
      </Container>
      <Container maxWidth="xs">
        <ContactForm head="Get A Hold Of Me" />
      </Container>
      <Container maxWidth="xs">
        <Login
          head="Looking to make a payment? Enter your secret word below."
          onSubmit={(word) => {
            // @TODO: handle sign in email
            // eslint-disable-next-line no-console
            console.log(word);
          }}
        />
      </Container>
    </Page>
  );
}

export default Home;
