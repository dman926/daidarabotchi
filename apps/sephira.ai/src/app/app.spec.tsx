import { UserState } from '@daidarabotchi/sephira-lib';
import { render, cleanup } from '../utils/testUtils';

import App from './app';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render successfully', async () => {
    const userRes: UserState = {
      status: 'signed-out',
    };

    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});
