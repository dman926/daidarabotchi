import { indigo, blueGrey } from '@mui/material/colors';
import { firebaseDevConfig } from './secrets';

// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: false,
  firebaseConfig: firebaseDevConfig,
  baseTheme: {
    palette: {
      primary: indigo,
      secondary: blueGrey,
    },
  },
};
