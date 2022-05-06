import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';

/* eslint-disable-next-line */
export interface TableRowProps extends MuiTableRowProps {}

export function TableRow(props: TableRowProps) {
  return <MuiTableRow {...props} />;
}

export default TableRow;
