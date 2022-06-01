import MuiToggleButton, {
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material/ToggleButton';

/* eslint-disable-next-line */
export interface ToggleButtonProps extends MuiToggleButtonProps {}

export function ToggleButton(props: ToggleButtonProps) {
  return <MuiToggleButton {...props} />;
}

export default ToggleButton;
