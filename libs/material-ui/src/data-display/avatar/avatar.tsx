import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import './avatar.module.scss';

/* eslint-disable-next-line */
export interface AvatarProps extends MuiAvatarProps {}

export function Avatar(props: AvatarProps) {
  return <MuiAvatar { ...props } />;
}

export default Avatar;
