import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, UserState } from '@daidarabotchi/sephira-front-end-lib';
import { EnhancedStore } from '@reduxjs/toolkit';

function render(
  ui: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  {
    preloadedState,
    store = createStore(false, preloadedState),
    ...renderOptions
  }: { preloadedState?: { user?: UserState }; store?: EnhancedStore } = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
