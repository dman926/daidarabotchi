import { render } from '@testing-library/react';

import Bio from './bio';

describe('Bio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bio />);
    expect(baseElement).toBeTruthy();
  });
});
