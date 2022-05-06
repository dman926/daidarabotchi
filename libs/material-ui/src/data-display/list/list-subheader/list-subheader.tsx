import MuiListSubheader, {
  ListSubheaderProps as MuiListSubheaderProps,
} from '@mui/material/ListSubheader';

/* eslint-disable-next-line */
export interface ListSubheaderProps extends MuiListSubheaderProps {}

export function ListSubheader(props: ListSubheaderProps) {
  return <MuiListSubheader {...props} />;
}

export default ListSubheader;
