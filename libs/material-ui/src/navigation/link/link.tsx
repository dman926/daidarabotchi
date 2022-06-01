import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

/* eslint-disable-next-line */
export interface LinkProps extends MuiLinkProps {}

export function Link(props: LinkProps) {
  return <MuiLink data-testid="mui-link" {...props} />;
}

export default Link;
