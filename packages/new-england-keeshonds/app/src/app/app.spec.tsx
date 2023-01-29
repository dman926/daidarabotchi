import { renderWithProvider } from '../utils/testUtils';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProvider(<App />);
    expect(baseElement).toBeTruthy();
  });
});
