import MuiCircularProgress, { CircularProgressProps as MuiCircularProgressProps} from "@mui/material/CircularProgress"

import './circular-progress.module.scss';

/* eslint-disable-next-line */
export interface CircularProgressProps extends MuiCircularProgressProps {}

export function CircularProgress(props: CircularProgressProps) {
  return <MuiCircularProgress />;
}

export default CircularProgress;
