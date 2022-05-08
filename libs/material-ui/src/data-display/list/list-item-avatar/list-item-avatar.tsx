import MuiListItemAvatar, {
  ListItemAvatarProps as MuiListItemAvatarProps,
} from '@mui/material/ListItemAvatar';

/* eslint-disable-next-line */
export interface ListItemAvatarProps extends MuiListItemAvatarProps {}

export function ListItemAvatar(props: ListItemAvatarProps) {
  return <MuiListItemAvatar {...props} />;
}

export default ListItemAvatar;
