import { render } from '@testing-library/react';

import CallToAction from './call-to-action';

describe('CallToAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallToAction />);
    expect(baseElement).toBeTruthy();
  });
});
