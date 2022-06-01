import MuiDialogTitle, {
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material/DialogTitle';

/* eslint-disable-next-line */
export interface DialogTitleProps extends MuiDialogTitleProps {}

export function DialogTitle(props: DialogTitleProps) {
  return <MuiDialogTitle {...props} />;
}

export default DialogTitle;
