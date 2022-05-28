import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

/* eslint-disable-next-line */
export interface IconButtonProps extends MuiIconButtonProps {}

export function IconButton(props: IconButtonProps) {
  return <MuiIconButton {...props} />;
}

export default IconButton;
