import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid';

/* eslint-disable-next-line */
export interface GridProps extends MuiGridProps {}

export function Grid(props: GridProps) {
  return <MuiGrid data-testid="mui-grid" {...props} />;
}

export default Grid;
