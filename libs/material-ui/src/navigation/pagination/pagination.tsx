import MuiPagination, {
  PaginationProps as MuiPaginationProps,
} from '@mui/material/Pagination';
import './pagination.module.scss';

/* eslint-disable-next-line */
export interface PaginationProps extends MuiPaginationProps {}

export function Pagination(props: PaginationProps) {
  return <MuiPagination {...props} />;
}

export default Pagination;
