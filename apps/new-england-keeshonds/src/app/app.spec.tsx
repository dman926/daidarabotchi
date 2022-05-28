import { renderWithProvider, screen } from '../utils/testUtils';
import '@testing-library/jest-dom';

import { App } from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProvider(<App />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
  });
});
