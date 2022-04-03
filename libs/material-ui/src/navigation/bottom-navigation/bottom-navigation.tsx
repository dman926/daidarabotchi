import MuiBottomNavigation, {
  BottomNavigationProps as MuiBottomNavigationProps,
} from '@mui/material/BottomNavigation';
import './bottom-navigation.module.scss';

/* eslint-disable-next-line */
export interface BottomNavigationProps extends MuiBottomNavigationProps {}

export function BottomNavigation(props: BottomNavigationProps) {
  return <MuiBottomNavigation {...props} />;
}

export default BottomNavigation;
