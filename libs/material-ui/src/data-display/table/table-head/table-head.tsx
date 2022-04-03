import MuiTableHead, {
  TableHeadProps as MuiTableHeadProps,
} from '@mui/material/TableHead';
import './table-head.module.scss';

/* eslint-disable-next-line */
export interface TableHeadProps extends MuiTableHeadProps {}

export function TableHead(props: TableHeadProps) {
  return <MuiTableHead {...props} />;
}

export default TableHead;
