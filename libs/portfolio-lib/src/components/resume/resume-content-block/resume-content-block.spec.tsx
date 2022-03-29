import { render } from '@testing-library/react';

import ResumeContentBlock from './resume-content-block';

describe('ResumeContentBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumeContentBlock />);
    expect(baseElement).toBeTruthy();
  });
});
