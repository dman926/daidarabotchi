import MuiTable, {TableProps as MuiTableProps } from "@mui/material/Table"
import './table.module.scss';

/* eslint-disable-next-line */
export interface TableProps extends MuiTableProps {}

export function Table(props: TableProps) {
  return <MuiTable {...props} />;
}

export default Table;
