import React from 'react';
import { render } from '@testing-library/react';

import Gallery from '../../pages/gallery';

describe('Gallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gallery />);
    expect(baseElement).toBeTruthy();
  });
});
