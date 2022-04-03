import { render } from '@testing-library/react';

import TabScrollButton from './tab-scroll-button';

describe('TabScrollButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabScrollButton direction="left" orientation="horizontal" />);
    expect(baseElement).toBeTruthy();
  });
});
