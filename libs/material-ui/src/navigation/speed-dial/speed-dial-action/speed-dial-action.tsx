import MuiSpeedDialAction, {
  SpeedDialActionProps as MuiSpeedDialActionProps,
} from '@mui/material/SpeedDialAction';

/* eslint-disable-next-line */
export interface SpeedDialActionProps extends MuiSpeedDialActionProps {}

export function SpeedDialAction(props: SpeedDialActionProps) {
  return <MuiSpeedDialAction {...props} />;
}

export default SpeedDialAction;
