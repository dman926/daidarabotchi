import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl';
import './form-control.module.scss';

/* eslint-disable-next-line */
export interface FormControlProps extends MuiFormControlProps {}

export function FormControl(props: FormControlProps) {
  return <MuiFormControl {...props} />;
}

export default FormControl;
