import MuiSwipeableDrawer, {
  SwipeableDrawerProps as MuiSwipeableDrawerProps,
} from '@mui/material/SwipeableDrawer';
import './swipeable-drawer.module.scss';

/* eslint-disable-next-line */
export interface SwipeableDrawerProps extends MuiSwipeableDrawerProps {}

export function SwipeableDrawer(props: SwipeableDrawerProps) {
  // WARNING: `data-testid` prop will not be passed on to SwipeableDrawer. It is better to attach a data-testid to the drawer's content
  return <MuiSwipeableDrawer {...props} />;
}

export default SwipeableDrawer;
