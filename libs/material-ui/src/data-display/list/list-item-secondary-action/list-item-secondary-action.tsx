import MuiListItemSecondaryAction, {
  ListItemSecondaryActionProps as MuiListItemSecondaryActionProps,
} from '@mui/material/ListItemSecondaryAction';
import './list-item-secondary-action.module.scss';

/* eslint-disable-next-line */
export interface ListItemSecondaryActionProps
  extends MuiListItemSecondaryActionProps {}

export function ListItemSecondaryAction(props: ListItemSecondaryActionProps) {
  return <MuiListItemSecondaryAction {...props} />;
}

export default ListItemSecondaryAction;
