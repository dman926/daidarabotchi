import { indigo, blueGrey } from '@mui/material/colors';

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: true,
  firebaseConfig: process.env['NX_NEK_FIREBASE_CONFIG']
    ? JSON.parse(process.env['NX_NEK_FIREBASE_CONFIG'])
    : false,
  recaptchaV3PublicKey: '6LcHETAgAAAAABLEG5AiS3IqNWnic1z-X0jBT_cf',
  baseTheme: {
    palette: {
      primary: indigo,
      secondary: blueGrey,
    },
  },
};
