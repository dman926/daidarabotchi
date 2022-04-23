import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  Toolbar,
  Typography,
} from '@daidarabotchi/material-ui';

export interface HeaderMenuItemProps {
  link: string;
  text: string;
  ButtonProps?: ButtonProps;
}
export interface HeaderProps {
  navigate: (
    url: string,
    options?: { query?: { [key: string]: unknown }[] }
  ) => void;
  title: string;
  currentRoute: string;
  home?: string;
  menu: HeaderMenuItemProps[];
}

export function Header(props: HeaderProps) {
  const { navigate, title, currentRoute, home = '', menu } = props;

  return (
    <AppBar position="static" data-testid="nek-header">
      <Toolbar>
        <Typography
          variant="h1"
          onClick={() => navigate(home)}
          sx={{
            fontSize: '1em',
            cursor: currentRoute === home ? 'default' : 'grabbing',
          }}
          data-testid="nek-header-title"
        >
          {title}
        </Typography>
        <span style={{ flexGrow: 1 }}></span>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${menu.length}, 1fr)`,
          }}
        >
          {menu.map((menuItem) => {
            const { link, text, ButtonProps = {} } = menuItem;
            return (
              <Button {...ButtonProps} onClick={() => navigate(link)}>
                <Typography>{text}</Typography>
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
