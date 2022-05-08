import { indigo, blueGrey } from '@mui/material/colors';

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: true,
  firebaseConfig: process.env['NEK_FIREBASE_CONFIG'] ? JSON.parse(process.env['NEK_FIREBASE_CONFIG']) : false,
  baseTheme: {
    palette: {
      primary: indigo,
      secondary: blueGrey,
    },
  },
};
