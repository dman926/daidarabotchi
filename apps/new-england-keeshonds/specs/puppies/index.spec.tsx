import React from 'react';
import { render } from '@testing-library/react';

import Puppies from '../../pages/puppies';

describe('Puppies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Puppies />);
    expect(baseElement).toBeTruthy();
  });
});
