import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import './box.module.scss';

/* eslint-disable-next-line */
export type BoxProps = MuiBoxProps;

export function Box(props: BoxProps) {
  return <MuiBox {...props} />;
}

export default Box;
