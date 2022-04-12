import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import './avatar.module.scss';

/* eslint-disable-next-line */
export interface AvatarProps extends MuiAvatarProps {}

export function Avatar(props: AvatarProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAvatar data-testid="mui-avatar" {...props} />;
}

export default Avatar;
