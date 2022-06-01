import MuiInput, { InputProps as MuiInputProps } from '@mui/material/Input';

/* eslint-disable-next-line */
export interface InputProps extends MuiInputProps {}

export function Input(props: InputProps) {
  return <MuiInput data-testid="mui-input" {...props} />;
}

export default Input;
