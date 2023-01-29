import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Login } from './login';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login head="" onSubmit={() => {}} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-login')).toBeInTheDocument();
  });

  it('should the correct head', () => {
    const { baseElement } = render(
      <Login head="TEST HEAD" onSubmit={() => {}} />
    );
    expect(baseElement).toBeTruthy();
    const head = screen.getByTestId('nek-login-head');
    expect(head).toBeInTheDocument();
    expect(head).toHaveTextContent('TEST HEAD');
  });

  it('should have an input', () => {
    const { baseElement } = render(<Login head="" onSubmit={() => {}} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-login-secret')).toBeInTheDocument();
  });
});
