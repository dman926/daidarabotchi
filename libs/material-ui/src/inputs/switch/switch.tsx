import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

/* eslint-disable-next-line */
export interface SwitchProps extends MuiSwitchProps {}

export function Switch(props: SwitchProps) {
  return <MuiSwitch data-testid="mui-switch" />;
}

export default Switch;
