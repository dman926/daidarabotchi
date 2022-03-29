import { render } from '@testing-library/react';

import ResumeHeader from './resume-header';

describe('ResumeHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumeHeader />);
    expect(baseElement).toBeTruthy();
  });
});
