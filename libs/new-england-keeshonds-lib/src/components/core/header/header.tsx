import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
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
            cursor: currentRoute === home ? 'default' : 'pointer',
          }}
          data-testid="nek-header-title"
        >
          {title}
        </Typography>
        <span style={{ flexGrow: 1 }}></span>
        <ButtonGroup
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${menu.length}, 1fr)`,
          }}
          data-testid="nek-header-menu"
        >
          {menu.map((menuItem, index) => {
            const { link, text, ButtonProps = {} } = menuItem;
            return (
              <Button
                {...ButtonProps}
                onClick={() => navigate(link)}
                key={index}
              >
                <Typography>{text}</Typography>
              </Button>
            );
          })}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
