import MuiTableCell, {
  TableCellProps as MuiTableCellProps,
} from '@mui/material/TableCell';
import './table-cell.module.scss';

/* eslint-disable-next-line */
export interface TableCellProps extends MuiTableCellProps {}

export function TableCell(props: TableCellProps) {
  return <MuiTableCell {...props} />;
}

export default TableCell;
