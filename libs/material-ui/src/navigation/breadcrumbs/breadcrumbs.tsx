import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material/Breadcrumbs';
import './breadcrumbs.module.scss';

/* eslint-disable-next-line */
export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

export function Breadcrumbs(props: BreadcrumbsProps) {
  return <MuiBreadcrumbs data-testid="mui-breadcrumbs" {...props} />;
}

export default Breadcrumbs;
