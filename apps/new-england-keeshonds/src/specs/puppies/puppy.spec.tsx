import React from 'react';
import { render } from '@testing-library/react';

import Puppy from '../../pages/puppies/[puppyID]';

describe('Puppy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Puppy />);
    expect(baseElement).toBeTruthy();
  });
});
