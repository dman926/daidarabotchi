import MuiDialogActions, {
  DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material/DialogActions';

/* eslint-disable-next-line */
export interface DialogActionsProps extends MuiDialogActionsProps {}

export function DialogActions(props: DialogActionsProps) {
  return <MuiDialogActions {...props} />;
}

export default DialogActions;
