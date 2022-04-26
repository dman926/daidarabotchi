import { Box, Container, Grid, Typography } from '@daidarabotchi/material-ui';
import {
  CallToAction,
  ContactForm,
  Login,
  Page,
} from '@daidarabotchi/new-england-keeshonds-lib';

import AllDogsImage from '../../../assets/dogs/all_dogs.jpg';
import WillowImage from '../../../assets/dogs/willow.jpg';
import MiloImage from '../../../assets/dogs/milo.jpg';
import BellaImage from '../../../assets/dogs/bella.jpg';

// TODO: fill out the description more
// TOOD: make this dynamic through functions
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
  return (
    <Page testid="home-wrapper">
      <Container>
        <CallToAction
          img={
            <img
              src={AllDogsImage}
              alt="Willow, Milo, and Bella"
              placeholder="blur"
              style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
            />
          }
        >
          {DOGS.map((dog, index) => (
            <Grid container key={index}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: 'grid',
                    placeContent: 'center',
                    paddingBottom: '0.25em',
                    paddingRight: '0.25em',
                  }}
                >
                  <img
                    src={dog.img}
                    alt={`${dog.name}`}
                    placeholder="blur"
                    width={256}
                    height={256}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" sx={{ marginTop: 1 }}>
                  {dog.name}
                </Typography>
                <Typography>{dog.description}</Typography>
              </Grid>
            </Grid>
          ))}
        </CallToAction>
      </Container>
      <Container maxWidth={false}>
        <Typography align="center">
          I don't know what to put down here. I was thinking of putting a full
          width thing here. Probably just list the current litter if there is
          one and a fallback message if not.
        </Typography>
      </Container>
      <Container maxWidth="xs">
        <ContactForm head="Get A Hold Of Me" />
      </Container>
      <Container maxWidth="xs">
        <Login
          head="Looking to make a paymnet? Enter your secret word below,"
          onSubmit={(word) => {}}
        />
      </Container>
    </Page>
  );
}

export default Home;
