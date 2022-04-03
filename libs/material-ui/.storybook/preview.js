import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

export const globalTypes = {
  themeArgs: {},
  muiTheme: {},
};

export const decorators = [
  (Story, options) => {
    const muiTheme = createTheme(options.globals.muiTheme);
    
    return (
      <Emotion10ThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <Story {...options} />
        </ThemeProvider>
      </Emotion10ThemeProvider>
    );
  },
];
