import MuiBadge, { BadgeProps as MuiBadgeProps } from '@mui/material/Badge'
import './badge.module.scss';

/* eslint-disable-next-line */
export interface BadgeProps extends MuiBadgeProps {}

export function Badge(props: BadgeProps) {
  return <MuiBadge { ...props } />;
}

export default Badge;
