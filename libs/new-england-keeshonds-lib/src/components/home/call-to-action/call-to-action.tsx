import { Box, Paper } from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';

export interface CallToActionProps {
  img: ReactNode;
  children?: ReactNode;
}

export function CallToAction({ children, img }: CallToActionProps) {
  return (
    <Paper elevation={4} sx={{ maxWidth: 1140, padding: '2.5em' }}>
      {img}
      <Box>{children}</Box>
    </Paper>
  );
}

export default CallToAction;
