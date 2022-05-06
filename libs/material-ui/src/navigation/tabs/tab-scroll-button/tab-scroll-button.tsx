import MuiTabScrollButton, {
  TabScrollButtonProps as MuiTabScrollButtonProps,
} from '@mui/material/TabScrollButton';

/* eslint-disable-next-line */
export interface TabScrollButtonProps extends MuiTabScrollButtonProps {}

export function TabScrollButton(props: TabScrollButtonProps) {
  return <MuiTabScrollButton {...props} />;
}

export default TabScrollButton;
