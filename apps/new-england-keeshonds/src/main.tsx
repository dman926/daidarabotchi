import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { FirebaseOptions } from 'firebase/app';
import { ReCaptchaV3Provider } from 'firebase/app-check';
import { FirebaseProvider } from '@daidarabotchi/firebase-react';
import CssBaseline from '@mui/material/CssBaseline';

import { environment } from './environments/environment';

import { App } from './app/app';

if (typeof environment.firebaseAppCheckToken !== 'undefined') {
  // eslint-disable-next-line
  (window as any)['FIREBASE_APPCHECK_DEBUG_TOKEN'] =
    environment.firebaseAppCheckToken === 'true'
      ? true
      : environment.firebaseAppCheckToken;
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
          environment.recaptchaV3PublicKey
            ? new ReCaptchaV3Provider(environment.recaptchaV3PublicKey)
            : undefined
        }
      >
        <ThemeProvider
          theme={createTheme(environment.baseTheme as ThemeOptions)}
        >
          <CssBaseline />
          <App />
        </ThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);
