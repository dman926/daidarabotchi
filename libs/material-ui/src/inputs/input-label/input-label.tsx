import MuiInputLabel, {
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material/InputLabel';

/* eslint-disable-next-line */
export interface InputLabelProps extends MuiInputLabelProps {}

export function InputLabel(props: InputLabelProps) {
  return <MuiInputLabel {...props} />;
}

export default InputLabel;
