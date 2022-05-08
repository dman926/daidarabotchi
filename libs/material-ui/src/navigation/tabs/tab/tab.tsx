import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab';

/* eslint-disable-next-line */
export interface TabProps extends MuiTabProps {}

export function Tab(props: TabProps) {
  return <MuiTab {...props} />;
}

export default Tab;
