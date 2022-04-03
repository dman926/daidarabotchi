import MuiSpeedDialIcon, {
  SpeedDialIconProps as MuiSpeedDialIconProps,
} from '@mui/material/SpeedDialIcon';
import './speed-dial-icon.module.scss';

/* eslint-disable-next-line */
export interface SpeedDialIconProps extends MuiSpeedDialIconProps {}

export function SpeedDialIcon(props: SpeedDialIconProps) {
  return <MuiSpeedDialIcon {...props} />;
}

export default SpeedDialIcon;
