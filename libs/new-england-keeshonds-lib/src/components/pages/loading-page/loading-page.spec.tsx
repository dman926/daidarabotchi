import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LoadingPage } from './loading-page';

describe('LoadingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingPage />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-loading-page')).toBeInTheDocument();
  });
});
