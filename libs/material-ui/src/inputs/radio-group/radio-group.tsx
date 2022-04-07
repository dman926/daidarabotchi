import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material/RadioGroup';
import './radio-group.module.scss';

/* eslint-disable-next-line */
export interface RadioGroupProps extends MuiRadioGroupProps {}

export function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup data-testid="mui-radio-group" {...props} />;
}

export default RadioGroup;
