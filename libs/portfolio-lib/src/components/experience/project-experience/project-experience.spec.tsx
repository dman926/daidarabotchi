import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProjectExperience } from './project-experience';

describe('Project Experience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectExperience title="" content="" />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-project-experience')
    ).toBeInTheDocument();
  });
});
