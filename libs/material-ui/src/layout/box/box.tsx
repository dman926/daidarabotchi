import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';


/* eslint-disable-next-line */
export type BoxProps = MuiBoxProps;

export function Box(props: BoxProps) {
  return <MuiBox data-testid="mui-box" {...props} />;
}

export default Box;
