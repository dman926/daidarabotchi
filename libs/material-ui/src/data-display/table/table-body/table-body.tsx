import MuiTableBody, {
  TableBodyProps as MuiTableBodyProps,
} from '@mui/material/TableBody';
import './table-body.module.scss';

/* eslint-disable-next-line */
export interface TableBodyProps extends MuiTableBodyProps {}

export function TableBody(props: TableBodyProps) {
  return <MuiTableBody {...props} />;
}

export default TableBody;
