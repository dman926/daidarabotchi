import { render } from '@testing-library/react';

import RadioGroup from './radio-group';

describe('RadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioGroup />);
    expect(baseElement).toBeTruthy();
  });
});
