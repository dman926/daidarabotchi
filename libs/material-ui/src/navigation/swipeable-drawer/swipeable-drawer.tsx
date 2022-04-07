import MuiSwipeableDrawer, {
  SwipeableDrawerProps as MuiSwipeableDrawerProps,
} from '@mui/material/SwipeableDrawer';
import './swipeable-drawer.module.scss';

/* eslint-disable-next-line */
export interface SwipeableDrawerProps extends MuiSwipeableDrawerProps {}

export function SwipeableDrawer(props: SwipeableDrawerProps) {
  return <MuiSwipeableDrawer data-testid="mui-swipeable-drawer" {...props} />;
}

export default SwipeableDrawer;
