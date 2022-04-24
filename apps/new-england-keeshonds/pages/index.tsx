import { Box, Container, Grid, Typography } from '@daidarabotchi/material-ui';
import { CallToAction } from '@daidarabotchi/new-england-keeshonds-lib';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import AllDogsImage from '../public/dogs/all_dogs.jpg';
import WillowImage from '../public/dogs/willow.jpg';
import MiloImage from '../public/dogs/milo.jpg';
import BellaImage from '../public/dogs/bella.jpg';

// TODO: fill out the description more
// TOOD: make this dynamic through functions and ISR it as a long term cache
const DOGS: {
  name: string;
  description: string;
  img: StaticImageData | string;
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

function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        margin: '1em 0',
      }}
    >
      <CallToAction
        img={<Image src={AllDogsImage} alt="Willow, Milo, and Bella" />}
      >
        {DOGS.map((dog, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={3}>
              <Image src={dog.img} alt={`${dog.name}`} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h4">{dog.name}</Typography>
              <Typography>{dog.description}</Typography>
            </Grid>
          </Grid>
        ))}
      </CallToAction>
    </Container>
  );
}

export default Home;
