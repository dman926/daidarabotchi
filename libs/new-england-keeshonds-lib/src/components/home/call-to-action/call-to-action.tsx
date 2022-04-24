import { Box, Paper, PaperProps } from '@daidarabotchi/material-ui';
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
      data-testid="call-to-action"
    >
      {img}
      <Box data-testid="call-to-action-children-wrapper">{children}</Box>
    </Paper>
  );
}

export default CallToAction;
