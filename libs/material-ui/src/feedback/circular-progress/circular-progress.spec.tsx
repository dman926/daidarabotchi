import { render } from '@testing-library/react';

import Dialog from './circular-progress';

describe('CircularProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog />);
    expect(baseElement).toBeTruthy();
  });
});
