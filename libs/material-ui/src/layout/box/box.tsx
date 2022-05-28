import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';

export type BoxProps = MuiBoxProps & {
  vertical?: boolean;
};

export function Box(props: BoxProps) {
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
  return <MuiBox data-testid="mui-box" {...props} sx={newSx} />;
}

export default Box;
