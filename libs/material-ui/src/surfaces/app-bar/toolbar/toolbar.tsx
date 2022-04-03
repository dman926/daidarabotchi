import MuiToolbar, {
  ToolbarProps as MuiToolbarProps,
} from '@mui/material/Toolbar';
import './toolbar.module.scss';

/* eslint-disable-next-line */
export interface ToolbarProps extends MuiToolbarProps {}

export function Toolbar(props: ToolbarProps) {
  return <MuiToolbar {...props} />;
}

export default Toolbar;
