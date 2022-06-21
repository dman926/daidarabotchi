import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HeaderContact } from './header-contact';

describe('Header Contact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderContact />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-header-contact')).toBeInTheDocument();
  });
});
