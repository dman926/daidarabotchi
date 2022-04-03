import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';
import './table-row.module.scss';

/* eslint-disable-next-line */
export interface TableRowProps extends MuiTableRowProps {}

export function TableRow(props: TableRowProps) {
  return <MuiTableRow {...props} />;
}

export default TableRow;
