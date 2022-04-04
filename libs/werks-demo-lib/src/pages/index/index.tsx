import { Box, Button, Grid, Typography } from '@daidarabotchi/material-ui';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface IndexProps { }

export function Index(props: IndexProps) {
  const router = useRouter();

  return (
    <Box>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={5}>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <Button variant='contained' onClick={(event) => router.push('/checkout')}>Build Your Next Dream PC</Button>
        </Grid>
        <Grid item xs={5}>
          <Typography>PROMOTIONAL IMAGE HERE</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
