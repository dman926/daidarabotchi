import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import './icon-button.module.scss';

/* eslint-disable-next-line */
export interface IconButtonProps extends MuiIconButtonProps {
  ref?: any; // Getting error while testing
}

export function IconButton(props: IconButtonProps) {
  return <MuiIconButton {...props} />;
}

export default IconButton;
