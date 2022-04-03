import MuiDialogContent, {
  DialogContentProps as MuiDialogContentProps,
} from '@mui/material/DialogContent';
import './dialog-content.module.scss';

/* eslint-disable-next-line */
export interface DialogContentProps extends MuiDialogContentProps {}

export function DialogContent(props: DialogContentProps) {
  return <MuiDialogContent {...props} />;
}

export default DialogContent;
