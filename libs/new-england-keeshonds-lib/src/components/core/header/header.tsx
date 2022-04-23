import { AppBar, Toolbar, Typography } from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface HeaderProps {
  navigate: (
    url: string,
    options?: { query?: { [key: string]: unknown }[] }
  ) => void;
  title: string;
  home: string;
}

export function Header(props: HeaderProps) {
  const { navigate, title, home } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h1"
            onClick={() => navigate(home)}
            sx={{
              fontSize: '1em',
              cursor: window.location.href === home ? 'default' : 'grabbing',
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
