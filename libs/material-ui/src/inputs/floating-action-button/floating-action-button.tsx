import MuiFloatingActionButton, { FabProps as MuiFloatingActionButtonProps} from "@mui/material/Fab"

import './floating-action-button.module.scss';

/* eslint-disable-next-line */
export interface FloatingActionButtonProps extends MuiFloatingActionButtonProps {}

export function FloatingActionButton(props: FloatingActionButtonProps) {
  return <MuiFloatingActionButton />;
}

export default FloatingActionButton;
