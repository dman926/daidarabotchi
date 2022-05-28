import { render, cleanup, screen, act } from '../utils/testUtils';

import { App } from './app';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render successfully', async () => {
    await act(() => {
      render(<App />);
    });
    expect(screen.getByTestId('sephira-wrapper')).toBeInTheDocument();
  });
});
