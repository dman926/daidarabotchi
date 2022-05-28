import MuiBottomNavigationAction, {
  BottomNavigationActionProps as MuiBottomNavigationActionProps,
} from '@mui/material/BottomNavigationAction';


/* eslint-disable-next-line */
export interface BottomNavigationActionProps
  extends MuiBottomNavigationActionProps {}

export function BottomNavigationAction(props: BottomNavigationActionProps) {
  return <MuiBottomNavigationAction {...props} />;
}

export default BottomNavigationAction;
