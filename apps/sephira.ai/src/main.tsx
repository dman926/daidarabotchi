import { createStore } from '@daidarabotchi/sephira-lib';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { environment } from './environments/environment';

import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={createStore(environment.production)}>
      <App />
    </Provider>
  </StrictMode>
);
