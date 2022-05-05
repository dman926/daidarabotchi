import { indigo, blueGrey } from '@mui/material/colors';

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyCgMbTcvl7CtZV_Lu_MaFABhojbiT0sSo0',
    authDomain: 'new-england-keeshonds.firebaseapp.com',
    projectId: 'new-england-keeshonds',
    storageBucket: 'new-england-keeshonds.appspot.com',
    messagingSenderId: '32046810268',
    appId: '1:32046810268:web:9fd8f49ced2346c6f41959',
    measurementId: 'G-SMX2BBJBG3',
  },
  baseTheme: {
    palette: {
      primary: indigo,
      secondary: blueGrey,
    },
  },
};
