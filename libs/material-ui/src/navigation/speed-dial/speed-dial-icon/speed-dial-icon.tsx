import MuiSpeedDialIcon, {
  SpeedDialIconProps as MuiSpeedDialIconProps,
} from '@mui/material/SpeedDialIcon';

/* eslint-disable-next-line */
export interface SpeedDialIconProps extends MuiSpeedDialIconProps {}

export function SpeedDialIcon(props: SpeedDialIconProps) {
  return <MuiSpeedDialIcon {...props} />;
}

export default SpeedDialIcon;
