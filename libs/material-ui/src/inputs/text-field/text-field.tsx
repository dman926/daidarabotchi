import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';

export type TextFieldProps = MuiTextFieldProps;

export function TextField(props: TextFieldProps) {
  return <MuiTextField data-testid="mui-text-field" {...props} />;
}

export default TextField;
