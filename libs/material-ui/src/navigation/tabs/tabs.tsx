import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';

/* eslint-disable-next-line */
export interface TabsProps extends MuiTabsProps {}

export function Tabs(props: TabsProps) {
  return <MuiTabs data-testid="mui-tabs" {...props} />;
}

export default Tabs;
