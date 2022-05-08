import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack';

/* eslint-disable-next-line */
export interface StackProps extends MuiStackProps {}

export function Stack(props: StackProps) {
  return <MuiStack data-testid="mui-stack" {...props} />;
}

export default Stack;
