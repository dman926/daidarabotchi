import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import styles from './radio.module.scss';

/* eslint-disable-next-line */
export interface RadioProps extends MuiRadioProps {}

export function Radio(props: RadioProps) {
  return <MuiRadio {...props} />;
}

export default Radio;
