import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactForm from './contact-form';

describe('ContactForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactForm />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-contact-form')).toBeInTheDocument();
  });
});
