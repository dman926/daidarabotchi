import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';

/* eslint-disable-next-line */
export interface AlertProps extends MuiAlertProps {}

export function Alert(props: AlertProps) {
  return <MuiAlert data-testid="mui-alert" {...props} />;
}

export default Alert;
