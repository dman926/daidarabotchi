import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

/* eslint-disable-next-line */
export type BoxProps = MuiBoxProps & {
  vertical?: boolean;
};

export function Box(props: BoxProps) {
  let { sx } = props;
  const { vertical, ...rest } = props;
  if (vertical) {
    sx = {
      ...(sx || {}),
      display: 'flex',
      flexDirection: 'column',
    };
  }
  return <MuiBox data-testid="mui-box" {...rest} sx={sx} />;
}

export default Box;
