import MuiSelect, { SelectProps as MuiSelectProps } from '@mui/material/Select';

/* eslint-disable-next-line */
export interface SelectProps extends MuiSelectProps {}

export function Select(props: SelectProps) {
  return <MuiSelect data-testid="mui-select" {...props} />;
}

export default Select;
