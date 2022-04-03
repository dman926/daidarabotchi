import MuiListSubheader, {
  ListSubheaderProps as MuiListSubheaderProps,
} from '@mui/material/ListSubheader';
import './list-subheader.module.scss';

/* eslint-disable-next-line */
export interface ListSubheaderProps extends MuiListSubheaderProps {}

export function ListSubheader(props: ListSubheaderProps) {
  return <MuiListSubheader {...props} />;
}

export default ListSubheader;
