import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from '@mui/material/Backdrop';

/* eslint-disable-next-line */
export interface BackdropProps extends MuiBackdropProps {}

export function Backdrop(props: BackdropProps) {
  return <MuiBackdrop data-testid="mui-backdrop" {...props} />;
}

export default Backdrop;
