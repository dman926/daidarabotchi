import MuiSpeedDialAction, {
  SpeedDialActionProps as MuiSpeedDialActionProps,
} from '@mui/material/SpeedDialAction';
import './speed-dial-action.module.scss';

/* eslint-disable-next-line */
export interface SpeedDialActionProps extends MuiSpeedDialActionProps {}

export function SpeedDialAction(props: SpeedDialActionProps) {
  return <MuiSpeedDialAction {...props} />;
}

export default SpeedDialAction;
