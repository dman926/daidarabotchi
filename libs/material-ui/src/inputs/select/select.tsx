import MuiSelect, { SelectProps as MuiSelectProps} from "@mui/material/Select"
import './select.module.scss';

/* eslint-disable-next-line */
export interface SelectProps extends MuiSelectProps {}

export function Select(props: SelectProps) {
  return <MuiSelect {...props} />;
}

export default Select;
