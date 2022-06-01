import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

/* eslint-disable-next-line */
export interface AvatarProps extends MuiAvatarProps {}

export function Avatar(props: AvatarProps) {
  return <MuiAvatar data-testid="mui-avatar" {...props} />;
}

export default Avatar;
