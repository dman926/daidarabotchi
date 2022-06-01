import MuiMenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material/MenuItem';

/* eslint-disable-next-line */
export interface MenuItemProps extends MuiMenuItemProps {}

export function MenuItem(props: MenuItemProps) {
  return <MuiMenuItem {...props} />;
}

export default MenuItem;
