import { indigo, blueGrey } from '@mui/material/colors';

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: true,
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
