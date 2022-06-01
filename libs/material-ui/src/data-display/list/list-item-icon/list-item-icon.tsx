import MuiListItemIcon, {
  ListItemIconProps as MuiListItemIconProps,
} from '@mui/material/ListItemIcon';

/* eslint-disable-next-line */
export interface ListItemIconProps extends MuiListItemIconProps {}

export function ListItemIcon(props: ListItemIconProps) {
  return <MuiListItemIcon {...props} />;
}

export default ListItemIcon;
