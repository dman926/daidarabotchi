import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export function LoadingPage() {
  const [periodCount, setPeriodCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPeriodCount((count) => {
        let newCount = count + 1;
        if (newCount > 3) {
          newCount = 0;
        }
        return newCount;
      });
    }, 1);
    return () => clearInterval(timer);
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeContent: 'center',
      }}
      data-testid="nek-loading-page"
    >
      <CircularProgress />
      <Typography>
        Please Wait
        {Array(periodCount).map(() => (
          <>.</>
        ))}
      </Typography>
    </Box>
  );
}

export default LoadingPage;
