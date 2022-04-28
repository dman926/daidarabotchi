import {
  AppBar,
  Button,
  ButtonGroup,
  ButtonProps as MuiButtonProps,
  Grid,
  Toolbar,
  Typography,
} from '@daidarabotchi/material-ui';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';
import { NavigateOptions } from 'react-router-dom';

const GridCenterContents = styled(Grid)(() => ({
  display: 'grid',
  placeItems: 'center',
}));

export interface HeaderMenuItemProps {
  link: string;
  text: string;
  ButtonProps?: MuiButtonProps;
}
export interface HeaderProps {
  navigate: (url: string, options?: NavigateOptions) => void;
  title: string | { icon: ReactNode; text: string };
  currentRoute: string;
  home?: string;
  menu: HeaderMenuItemProps[];
}

export function Header(props: HeaderProps) {
  const { navigate, title, currentRoute, home = '', menu } = props;

  return (
    <AppBar position="static" data-testid="nek-header">
      <Toolbar>
        <Grid container spacing={2}>
          <GridCenterContents item xs={6}>
            <Typography
              variant="h1"
              onClick={() => navigate(home)}
              sx={{
                fontSize: '1em',
                cursor: currentRoute === home ? 'default' : 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
              data-testid="nek-header-title"
            >
              {typeof title === 'string' ? (
                title
              ) : (
                <>
                  {title.icon}
                  <span>{title.text}</span>
                </>
              )}
            </Typography>
          </GridCenterContents>
          <GridCenterContents
            item
            xs={1}
            sx={{ position: 'absolute' }}
          >
            {/* @TODO: PUT AN ANNOUNCEMENT BAR HERE WHEN THERE IS A CURRENT LITTER */}
          </GridCenterContents>
          <GridCenterContents item xs={6}>
            <ButtonGroup
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${menu.length}, 1fr)`,
                width: '12em',
                marginLeft: 'auto',
              }}
              data-testid="nek-header-menu"
            >
              {menu.map((menuItem) => {
                const { link, text, ButtonProps = {} } = menuItem;
                return (
                  <Button
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...ButtonProps}
                    onClick={() => navigate(link)}
                    key={text}
                    data-testid="nek-header-nav-button"
                  >
                    <Typography>{text}</Typography>
                  </Button>
                );
              })}
            </ButtonGroup>
          </GridCenterContents>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
