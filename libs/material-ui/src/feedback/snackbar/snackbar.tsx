import MuiSnackbar, { SnackbarProps as MuiSnackbarProps} from "@mui/material/Snackbar"

import './snackbar.module.scss';

/* eslint-disable-next-line */
export interface SnackbarProps extends MuiSnackbarProps {}

export function Snackbar(props: SnackbarProps) {
  return <MuiSnackbar {...props} />;
}

export default Snackbar;
