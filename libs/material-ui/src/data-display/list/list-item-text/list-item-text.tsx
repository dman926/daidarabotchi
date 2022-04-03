import MuiListItemText, {
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material/ListItemText';
import './list-item-text.module.scss';

/* eslint-disable-next-line */
export interface ListItemTextProps extends MuiListItemTextProps {}

export function ListItemText(props: ListItemTextProps) {
  return <MuiListItemText {...props} />;
}

export default ListItemText;
