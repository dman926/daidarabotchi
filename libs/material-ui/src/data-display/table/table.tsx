import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';

/* eslint-disable-next-line */
export interface TableProps extends MuiTableProps {}

export function Table(props: TableProps) {
  return <MuiTable data-testid="mui-table" {...props} />;
}

export default Table;
