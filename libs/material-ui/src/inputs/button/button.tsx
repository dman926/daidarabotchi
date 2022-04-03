import MuiButton, {
  ButtonProps as MuiButtonProps
} from '@mui/material/Button';
import './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps extends MuiButtonProps {};

export function Button(props: ButtonProps) {
  return <MuiButton {...props}></MuiButton>;
}

export default Button;
