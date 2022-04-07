import MuiList, { ListProps as MuiListProps } from '@mui/material/List';
import './list.module.scss';

/* eslint-disable-next-line */
export interface ListProps extends MuiListProps {
  component?: string;
}

export function List(props: ListProps) {
  return <MuiList data-testid="mui-list" {...props} />;
}

export default List;
