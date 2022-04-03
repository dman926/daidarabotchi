import { render } from '@testing-library/react';

import SpeedDialAction from './speed-dial-action';

describe('SpeedDialAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpeedDialAction title="Speed Dial Title" />);
    expect(baseElement).toBeTruthy();
  });
});
