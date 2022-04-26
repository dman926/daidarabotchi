import { render } from '@testing-library/react';

import { Puppies } from './puppies';

describe('Puppies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Puppies />);
    expect(baseElement).toBeTruthy();
  });
});
