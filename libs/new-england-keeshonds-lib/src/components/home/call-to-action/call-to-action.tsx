import {
  Box,
  Divider,
  Paper,
  PaperProps,
  Typography,
} from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';

export interface CallToActionProps {
  img: ReactNode;
  children?: ReactNode;
  PaperProps?: PaperProps;
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
