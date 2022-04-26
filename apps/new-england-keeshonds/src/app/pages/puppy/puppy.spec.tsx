import { render } from '@testing-library/react';

import { Puppy } from './puppy';

describe('Puppy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Puppy />);
    expect(baseElement).toBeTruthy();
  });
});
