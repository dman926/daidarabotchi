import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WorkExperience } from './work-experience';

describe('Work Experience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkExperience />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-work-experience')).toBeInTheDocument();
  });
});
