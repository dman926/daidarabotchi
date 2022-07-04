import { usePrint } from '@daidarabotchi/portfolio-lib';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { environment } from './environments/environment';

export function ThemeWrap({ children }: { children: ReactNode }) {
  const { print } = usePrint();

  return (
    <ThemeProvider
      theme={createTheme((print ? {} : environment.baseTheme) as ThemeOptions)}
    >
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrap;
