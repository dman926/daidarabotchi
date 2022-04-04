import React from 'react';
import { render } from '@testing-library/react';

import Checkout from '../pages/checkout';

describe('Checkout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkout />);
    expect(baseElement).toBeTruthy();
  });
});
