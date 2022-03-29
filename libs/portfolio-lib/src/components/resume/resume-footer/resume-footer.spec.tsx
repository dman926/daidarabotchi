import { render } from '@testing-library/react';

import ResumeFooter from './resume-footer';

describe('ResumeFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumeFooter />);
    expect(baseElement).toBeTruthy();
  });
});
