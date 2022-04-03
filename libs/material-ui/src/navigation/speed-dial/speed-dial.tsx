import MuiSpeedDial, {
  SpeedDialProps as MuiSpeedDialProps,
} from '@mui/material/SpeedDial';
import './speed-dial.module.scss';

/* eslint-disable-next-line */
export interface SpeedDialProps extends MuiSpeedDialProps {}

export function SpeedDial(props: SpeedDialProps) {
  return <MuiSpeedDial {...props} />;
}

export default SpeedDial;
