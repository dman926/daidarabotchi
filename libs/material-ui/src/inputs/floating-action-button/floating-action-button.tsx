import MuiFloatingActionButton, {
  FabProps as MuiFloatingActionButtonProps,
} from '@mui/material/Fab';

/* eslint-disable-next-line */
export interface FloatingActionButtonProps
  extends MuiFloatingActionButtonProps {}

export function FloatingActionButton(props: FloatingActionButtonProps) {
  return (
    <MuiFloatingActionButton data-testid="mui-floating-button" {...props} />
  );
}

export default FloatingActionButton;
