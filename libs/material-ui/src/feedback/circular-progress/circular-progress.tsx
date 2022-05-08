import MuiCircularProgress, {
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material/CircularProgress';

/* eslint-disable-next-line */
export interface CircularProgressProps extends MuiCircularProgressProps {}

export function CircularProgress(props: CircularProgressProps) {
  return <MuiCircularProgress data-testid="mui-circular-progress" {...props} />;
}

export default CircularProgress;
