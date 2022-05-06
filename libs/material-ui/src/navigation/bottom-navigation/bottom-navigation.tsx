import MuiBottomNavigation, {
  BottomNavigationProps as MuiBottomNavigationProps,
} from '@mui/material/BottomNavigation';

/* eslint-disable-next-line */
export interface BottomNavigationProps extends MuiBottomNavigationProps {}

export function BottomNavigation(props: BottomNavigationProps) {
  return <MuiBottomNavigation data-testid="mui-bottom-navigation" {...props} />;
}

export default BottomNavigation;
