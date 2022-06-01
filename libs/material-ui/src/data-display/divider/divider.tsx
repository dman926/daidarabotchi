import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider';

/* eslint-disable-next-line */
export interface DividerProps extends MuiDividerProps {}

export function Divider(props: DividerProps) {
  return <MuiDivider data-testid="mui-divider" {...props} />;
}

export default Divider;
