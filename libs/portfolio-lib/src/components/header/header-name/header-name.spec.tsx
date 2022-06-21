import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HeaderName } from './header-name';

describe('Header Name', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderName />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-header-name')).toBeInTheDocument();
  });
});
