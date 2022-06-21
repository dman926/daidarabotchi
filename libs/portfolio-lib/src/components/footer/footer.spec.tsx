import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-footer')).toBeInTheDocument();
  });
});
