import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import './drawer.module.scss';

/* eslint-disable-next-line */
export interface DrawerProps extends MuiDrawerProps {}

export function Drawer(props: DrawerProps) {
  return <MuiDrawer {...props} />;
}

export default Drawer;
