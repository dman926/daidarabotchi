import MuiTablePagination, {
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material/TablePagination';
import './table-pagination.module.scss';

/* eslint-disable-next-line */
export type TablePaginationProps = MuiTablePaginationProps;

export function TablePagination(props: TablePaginationProps) {
  return <MuiTablePagination {...props} />;
}

export default TablePagination;
