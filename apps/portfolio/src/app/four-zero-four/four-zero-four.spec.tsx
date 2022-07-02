import { render } from '@testing-library/react';

import { FourZeroFour } from './four-zero-four';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FourZeroFour />);

    expect(baseElement).toBeTruthy();
  });
});
