import {
  AppBar,
  Button,
  ButtonGroup,
  ButtonProps as MuiButtonProps,
  Toolbar,
  Typography,
} from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';
import { NavigateOptions } from 'react-router-dom';

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
        <Typography
          variant="h1"
          onClick={() => navigate(home)}
          sx={{
            fontSize: '1em',
            cursor: currentRoute === home ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 1
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
        <span style={{ flexGrow: 1 }} />
        <ButtonGroup
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${menu.length}, 1fr)`,
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
