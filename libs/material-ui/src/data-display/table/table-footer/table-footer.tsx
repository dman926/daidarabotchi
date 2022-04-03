import MuiTableFooter, {
  TableFooterProps as MuiTableFooterProps,
} from '@mui/material/TableFooter';
import './table-footer.module.scss';

/* eslint-disable-next-line */
export interface TableFooterProps extends MuiTableFooterProps {}

export function TableFooter(props: TableFooterProps) {
  return <MuiTableFooter {...props} />;
}

export default TableFooter;
