import { render, cleanup, screen } from '@testing-library/react';

import { App } from './app';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render successfully', async () => {
    render(<App />);
    expect(screen.getByTestId('sephira-wrapper')).toBeInTheDocument();
  });
});
