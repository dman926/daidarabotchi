import { AppBar, Grid, Toolbar } from '@daidarabotchi/material-ui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps { }

export function Footer(props: FooterProps) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={4}>
            NAV ITEMS
          </Grid>
          <Grid item xs={4}>
            BLOG/DEAL ITEMS?
          </Grid>
          <Grid item xs={4}>
            ACCOUNT ITEMS
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
