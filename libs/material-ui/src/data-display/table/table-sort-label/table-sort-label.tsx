import MuiTableSortLabel, {
  TableSortLabelProps as MuiTableSortLabelProps,
} from '@mui/material/TableSortLabel';
import './table-sort-label.module.scss';

/* eslint-disable-next-line */
export interface TableSortLabelProps extends MuiTableSortLabelProps {}

export function TableSortLabel(props: TableSortLabelProps) {
  return <MuiTableSortLabel {...props} />;
}

export default TableSortLabel;
