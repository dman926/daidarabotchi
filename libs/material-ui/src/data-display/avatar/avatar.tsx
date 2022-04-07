import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import './avatar.module.scss';

/* eslint-disable-next-line */
export interface AvatarProps extends MuiAvatarProps {}

export function Avatar(props: AvatarProps) {
  return <MuiAvatar data-testid="mui-avatar" {...props} />;
}

export default Avatar;