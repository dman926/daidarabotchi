import MuiListItemButton, {
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material/ListItemButton';

/* eslint-disable-next-line */
export interface ListItemButtonProps extends MuiListItemButtonProps {}

export function ListItemButton(props: ListItemButtonProps) {
  return <MuiListItemButton {...props} />;
}

export default ListItemButton;
