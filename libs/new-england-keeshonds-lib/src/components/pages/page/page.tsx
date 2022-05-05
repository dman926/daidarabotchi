import { Box } from '@daidarabotchi/material-ui';
import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
  testid?: string;
  sx?: SxProps<Theme>;
}

export function Page({ children, testid = 'page-wrapper', sx }: PageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        margin: '1em 0',
        justifyContent: 'center',
        ...sx,
      }}
      data-testid={testid}
    >
      {children}
    </Box>
  );
}

export default Page;
