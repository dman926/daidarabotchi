import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material';

/* eslint-disable-next-line */
export interface ContainerProps extends MuiContainerProps {
  vertical?: boolean;
}

export function Container(props: ContainerProps) {
  const { vertical, sx } = props;
  let newSx: SxProps<Theme> | undefined;
  if (vertical) {
    newSx = {
      ...(sx || {}),
      display: 'flex',
      flexDirection: 'column',
    };
  } else {
    newSx = sx;
  }
  return <MuiContainer data-testid="mui-container" {...props} sx={newSx} />;
}

export default Container;
