import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';

/* eslint-disable-next-line */
export interface RadioProps extends MuiRadioProps {}

export function Radio(props: RadioProps) {
  return <MuiRadio data-testid="mui-radio" {...props} />;
}

export default Radio;
