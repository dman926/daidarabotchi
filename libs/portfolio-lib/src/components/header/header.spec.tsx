import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-header')).toBeInTheDocument();
  });
});
