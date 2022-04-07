import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';
import './text-field.module.scss';

export type TextFieldProps = MuiTextFieldProps;

export function TextField(props: TextFieldProps) {
  return <MuiTextField data-testid="mui-text-field" {...props} />;
}

export default TextField;
