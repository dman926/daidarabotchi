import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

/* eslint-disable-next-line */
export interface ButtonProps extends MuiButtonProps {}

export function Button(props: ButtonProps) {
  return <MuiButton data-testid="mui-button" {...props}></MuiButton>;
}

export default Button;
