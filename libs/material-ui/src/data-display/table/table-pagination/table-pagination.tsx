import MuiTablePagination, {
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material/TablePagination';
import { ElementType } from 'react';

/* eslint-disable-next-line */
export type TablePaginationProps = MuiTablePaginationProps & {
  component?: ElementType;
};

export function TablePagination(props: TablePaginationProps) {
  return <MuiTablePagination {...props} />;
}

export default TablePagination;
