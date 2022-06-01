import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

/* eslint-disable-next-line */
export interface AppBarProps extends MuiAppBarProps {
  component?: string;
}

export function AppBar(props: AppBarProps) {
  return <MuiAppBar data-testid="mui-app-bar" {...props} />;
}

export default AppBar;
