import { indigo, blueGrey } from '@mui/material/colors';
import { firebaseProdConfig } from './secrets';

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: true,
  firebaseConfig: firebaseProdConfig,
  baseTheme: {
    palette: {
      primary: indigo,
      secondary: blueGrey,
    },
  },
};
