import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { blueGrey, indigo } from '@mui/material/colors';
import { FirebaseOptions } from 'firebase/app';
import { ReCaptchaV3Provider } from 'firebase/app-check';
import { FirebaseProvider } from 'firebase-react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { App } from './app/app';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey,
  },
});

if (!import.meta.env.PROD) {
  const appCheckDebugToken = import.meta.env.VITE_FIREBASE_APPCHECK_DEGUG_TOKEN;
  if (appCheckDebugToken !== undefined) {
    // eslint-disable-next-line
    (window as any).FIREBASE_APPCHECK_DEBUG_TOKEN =
      appCheckDebugToken === 'true' ? true : appCheckDebugToken;
  }
}

const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG
  ? (JSON.parse(
      window.atob(import.meta.env.VITE_FIREBASE_CONFIG)
    ) as FirebaseOptions)
  : false;

const firebaseAppCheckProvider = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY
  ? new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY)
  : undefined;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseProvider
        firebaseOptions={firebaseConfig}
        firebaseAppCheckProvider={firebaseAppCheckProvider}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);
