import { render, screen } from '@testing-library/react';

import { Image } from './image';

describe('Image', () => {
  it('should render', () => {
    const { baseElement } = render(<Image src="" />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-iamge')).toBeInTheDocument();
  })
});