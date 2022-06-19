import { indigo, blueGrey } from '@mui/material/colors';

// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: false,
  firebaseConfig: process.env['NX_NEK_FIREBASE_CONFIG']
    ? JSON.parse(process.env['NX_NEK_FIREBASE_CONFIG'])
    : false,
  recaptchaV3PublicKey: process.env['NX_NEK_RECAPTCHA_V3_SITE_KEY'],
  firebaseAppCheckToken: process.env['NX_NEK_FIREBASE_APPCHECK_DEGUG_TOKEN'],
  baseTheme: {
    palette: {
      primary: indigo,
      secondary: blueGrey,
    },
  },
};
