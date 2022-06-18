import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FirebaseOptions } from 'firebase/app';
import { ReCaptchaV3Provider } from 'firebase/app-check';
import { FirebaseProvider } from '@daidarabotchi/firebase-react';
import CssBaseline from '@mui/material/CssBaseline';

import { environment } from './environments/environment';

import { App } from './app/app';

const appcheckToken = process.env['NX_NEK_FIREBASE_APPCHECK_DEGUG_TOKEN'];
if (appcheckToken) {
  // eslint-disable-next-line
  (window as any)['FIREBASE_APPCHECK_DEBUG_TOKEN'] = appcheckToken;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseProvider
        firebaseOptions={environment.firebaseConfig as FirebaseOptions | false}
        firebaseAppCheckProvider={
          new ReCaptchaV3Provider(environment.recaptchaV3PublicKey)
        }
      >
        <ThemeProvider theme={createTheme(environment.baseTheme)}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);
