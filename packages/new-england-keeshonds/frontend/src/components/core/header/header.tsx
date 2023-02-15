import {
  AppBar,
  Button,
  ButtonGroup,
  ButtonProps as MuiButtonProps,
  Grid,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { ReactNode, useState } from 'react';
import { NavigateOptions } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

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
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<
    HTMLElement | undefined
  >();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const { navigate, title, currentRoute, home = '', menu } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMobileMenuAnchor(undefined);
  };

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
          <GridCenterContents item xs={1} sx={{ position: 'absolute' }}>
            {/* @TODO: PUT AN ANNOUNCEMENT BAR HERE WHEN THERE IS A CURRENT LITTER */}
          </GridCenterContents>
          <GridCenterContents item xs={6}>
            {xs ? (
              <>
                <IconButton onClick={handleClick} sx={{ marginLeft: 'auto' }}>
                  <MenuIcon htmlColor="white" />
                </IconButton>
                <Menu
                  anchorEl={mobileMenuAnchor}
                  open={Boolean(mobileMenuAnchor)}
                  onClose={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {menu.map((menuItem) => {
                    const { link, text } = menuItem;
                    return (
                      <MenuItem
                        onClick={() => {
                          navigate(link);
                          handleClose();
                        }}
                        key={text}
                        data-testid="nek-header-nav-button"
                      >
                        <Typography>{text}</Typography>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
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
                      onClick={() => {
                        navigate(link);
                      }}
                      key={text}
                      data-testid="nek-header-nav-button"
                    >
                      <Typography>{text}</Typography>
                    </Button>
                  );
                })}
              </ButtonGroup>
            )}
          </GridCenterContents>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
