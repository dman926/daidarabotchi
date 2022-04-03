import MuiDivider, { DividerProps as MuiDividerProps } from '@mui/material/Divider'
import './divider.module.scss';

/* eslint-disable-next-line */
export interface DividerProps extends MuiDividerProps {}

export function Divider(props: DividerProps) {
  return (
    <MuiDivider {...props} />
  );
}

export default Divider;
