import MuiMenuList from '@mui/material/MenuList';
import './menu-list.module.scss';

/* eslint-disable-next-line */
export interface MenuListProps {
  autoFocus?: boolean;
  autoFocusItem?: boolean;
  children?: React.ReactNode;
  disabledItemsFocusable?: boolean;
  disableListWrap?: boolean;
  variant?: 'menu' | 'selectedMenu';
}

export function MenuList(props: MenuListProps) {
  return <MuiMenuList {...props}></MuiMenuList>;
}

export default MenuList;
