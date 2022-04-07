import { render } from '@testing-library/react';

import ToggleButton from './toggle-button';

describe('ToggleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleButton value='' />);
    expect(baseElement).toBeTruthy();
  });
});
