import { indigo, blueGrey } from '@mui/material/colors';

// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: false,
  firebaseConfig: process.env['NX_FIREBASE_CONFIG']
    ? JSON.parse(process.env['NX_FIREBASE_CONFIG'])
    : false,
  firebaseServiceAccount: process.env['NX_FIREBASE_ADMIN_SDK']
    ? JSON.parse(process.env['NX_FIREBASE_ADMIN_SDK'])
    : undefined,
  baseTheme: {
    palette: {
      primary: indigo,
      secondary: blueGrey,
    },
  },
};
