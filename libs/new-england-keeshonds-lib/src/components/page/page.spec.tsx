import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Page from './page';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a dynamic testid with a fallback of `page-wrapper`', () => {
    let { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('page-wrapper')).toBeInTheDocument();
    baseElement = render(<Page testid='dynamic-test' />).baseElement;
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('dynamic-test')).toBeInTheDocument();
  });
});
