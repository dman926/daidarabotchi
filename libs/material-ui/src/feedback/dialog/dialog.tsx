import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

/* eslint-disable-next-line */
export interface DialogProps extends MuiDialogProps {}

export function Dialog(props: DialogProps) {
  return <MuiDialog data-testid="mui-dialog" {...props} />;
}

export default Dialog;
