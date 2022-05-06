import MuiBadge, { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

/* eslint-disable-next-line */
export interface BadgeProps extends MuiBadgeProps {}

export function Badge(props: BadgeProps) {
  return <MuiBadge data-testid="mui-badge" {...props} />;
}

export default Badge;
