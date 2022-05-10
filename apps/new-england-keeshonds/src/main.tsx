import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FirebaseOptions } from 'firebase/app';
import { ServiceAccount } from 'firebase-admin';
import { FirebaseProvider } from '@daidarabotchi/new-england-keeshonds-lib';
import CssBaseline from '@mui/material/CssBaseline';
import { environment } from './environments/environment';

import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseProvider
        firebaseOptions={environment.firebaseConfig as FirebaseOptions | false}
        serviceAccount={
          environment.firebaseServiceAccount as ServiceAccount | undefined
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
