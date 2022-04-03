import MuiBackdrop, { BackdropProps as MuiBackdropProps} from "@mui/material/Backdrop"

import './backdrop.module.scss';

/* eslint-disable-next-line */
export interface BackdropProps extends MuiBackdropProps {}

export function Backdrop(props: BackdropProps) {
  return <MuiBackdrop {...props} />;
}

export default Backdrop;
