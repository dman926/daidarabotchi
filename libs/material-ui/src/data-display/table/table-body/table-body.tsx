import MuiTableBody, {
  TableBodyProps as MuiTableBodyProps,
} from '@mui/material/TableBody';

/* eslint-disable-next-line */
export interface TableBodyProps extends MuiTableBodyProps {}

export function TableBody(props: TableBodyProps) {
  return <MuiTableBody {...props} />;
}

export default TableBody;
