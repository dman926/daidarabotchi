import { renderWithProvider, screen } from '../utils/testUtils';
import '@testing-library/jest-dom';

import { App } from './app';
import { environment } from '../environments/environment';

describe('App', () => {
  it('should render successfully', () => {
    console.log(`VALUE ---- ${environment.firebaseConfig}`);
    const { baseElement } = renderWithProvider(<App />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
  });
});
