import MuiTableContainer, {
  TableContainerProps as MuiTableContainerProps,
} from '@mui/material/TableContainer';
import { ElementType } from 'react';

/* eslint-disable-next-line */
export interface TableContainerProps extends MuiTableContainerProps {
  component?: ElementType;
}

export function TableContainer(props: TableContainerProps) {
  return <MuiTableContainer {...props} />;
}

export default TableContainer;
