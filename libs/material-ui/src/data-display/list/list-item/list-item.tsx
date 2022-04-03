import MuiListItem, {
  ListItemProps as MuiListItemProps,
} from '@mui/material/ListItem';
import './list-item.module.scss';

/* eslint-disable-next-line */
export interface ListItemProps extends MuiListItemProps {}

export function ListItem(props: ListItemProps) {
  return <MuiListItem {...props} />;
}

export default ListItem;
