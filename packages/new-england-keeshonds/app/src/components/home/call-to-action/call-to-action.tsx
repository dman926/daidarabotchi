import {
  Box,
  Divider,
  Paper,
  PaperProps as MuiPaperProps,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

export interface CallToActionProps {
  img: ReactNode;
  children?: ReactNode;
  PaperProps?: MuiPaperProps;
}

export function CallToAction({
  children,
  img,
  PaperProps = {},
}: CallToActionProps) {
  return (
    <Paper
      elevation={4}
      sx={{ padding: '2.5em' }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...PaperProps}
      data-testid="nek-call-to-action"
    >
      {img}
      <Divider variant="middle">
        <Typography>Meet The Parents</Typography>
      </Divider>
      <Box data-testid="nek-call-to-action-children-wrapper">{children}</Box>
    </Paper>
  );
}

export default CallToAction;
