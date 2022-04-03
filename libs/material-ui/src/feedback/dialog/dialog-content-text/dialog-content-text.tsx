import MuiDialogContentText, {
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material/DialogContentText';
import './dialog-content-text.module.scss';

/* eslint-disable-next-line */
export interface DialogContentTextProps extends MuiDialogContentTextProps {}

export function DialogContentText(props: DialogContentTextProps) {
  return <MuiDialogContentText {...props} />;
}

export default DialogContentText;
