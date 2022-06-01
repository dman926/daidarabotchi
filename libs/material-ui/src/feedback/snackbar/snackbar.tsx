import MuiSnackbar, {
  SnackbarProps as MuiSnackbarProps,
} from '@mui/material/Snackbar';

/* eslint-disable-next-line */
export interface SnackbarProps extends MuiSnackbarProps {}

export function Snackbar(props: SnackbarProps) {
  return <MuiSnackbar data-testid="mui-snackbar" {...props} />;
}

export default Snackbar;
