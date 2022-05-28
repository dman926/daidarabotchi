import MuiMenuList from '@mui/material/MenuList';

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
  return <MuiMenuList {...props} />;
}

export default MenuList;
