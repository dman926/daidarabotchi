import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
  });
});
