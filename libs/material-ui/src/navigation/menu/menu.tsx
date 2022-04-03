import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import './menu.module.scss';

/* eslint-disable-next-line */
export interface MenuProps extends MuiMenuProps {}

export function Menu(props: MenuProps) {
  return <MuiMenu {...props} />;
}

export default Menu;
