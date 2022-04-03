import MuiAlert, { AlertProps as MuiAlertProps} from "@mui/material/Alert"

import './alert.module.scss';

/* eslint-disable-next-line */
export interface AlertProps extends MuiAlertProps {}

export function Alert(props: AlertProps) {
  return <MuiAlert />;
}

export default Alert;
