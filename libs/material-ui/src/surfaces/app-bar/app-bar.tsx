import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import './app-bar.module.scss';

/* eslint-disable-next-line */
export interface AppBarProps extends MuiAppBarProps {
  component?: string;
}

export function AppBar(props: AppBarProps) {
  return <MuiAppBar {...props} />;
}

export default AppBar;
