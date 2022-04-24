import { SxProps, Theme } from '@mui/material';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import './box.module.scss';

/* eslint-disable-next-line */
export type BoxProps = MuiBoxProps & {
  vertical?: boolean;
};

export function Box(props: BoxProps) {
  let sx: SxProps<Theme> | undefined;
  if (props.vertical) {
    sx = {
      ...(props.sx ? props.sx : {}),
      display: 'flex',
      flexDirection: 'column',
    };
  } else {
    sx = props.sx;
  }
  return <MuiBox data-testid="mui-box" {...props} sx={sx} />;
}

export default Box;
