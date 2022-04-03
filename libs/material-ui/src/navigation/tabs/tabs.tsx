import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import './tabs.module.scss';

/* eslint-disable-next-line */
export interface TabsProps extends MuiTabsProps {}

export function Tabs(props: TabsProps) {
  return <MuiTabs {...props} />;
}

export default Tabs;
