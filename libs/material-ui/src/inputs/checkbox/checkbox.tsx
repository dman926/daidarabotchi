import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox';

import './checkbox.module.scss';

/* eslint-disable-next-line */
export interface CheckboxProps extends MuiCheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox data-testid="mui-checkbox" {...props} />;
}

export default Checkbox;
