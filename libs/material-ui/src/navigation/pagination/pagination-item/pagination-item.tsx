import MuiPaginationItem, {
  PaginationItemProps as MuiPaginationItemProps,
} from '@mui/material/PaginationItem';

/* eslint-disable-next-line */
export interface PaginationItemProps extends MuiPaginationItemProps {}

export function PaginationItem(props: PaginationItemProps) {
  return <MuiPaginationItem data-testid="mui-pagination-item" {...props} />;
}

export default PaginationItem;
