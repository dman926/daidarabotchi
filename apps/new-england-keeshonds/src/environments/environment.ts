import { indigo, blueGrey } from '@mui/material/colors';

// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

// eslint-disable-next-line import/prefer-default-export
export const environment = {
  production: false,
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
