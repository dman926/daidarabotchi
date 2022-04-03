import MuiListItemButton, {
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material/ListItemButton';
import './list-item-button.module.scss';

/* eslint-disable-next-line */
export interface ListItemButtonProps extends MuiListItemButtonProps {}

export function ListItemButton(props: ListItemButtonProps) {
  return <MuiListItemButton {...props} />;
}

export default ListItemButton;
