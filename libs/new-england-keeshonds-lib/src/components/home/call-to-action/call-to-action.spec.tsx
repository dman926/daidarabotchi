import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CallToAction from './call-to-action';

describe('CallToAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallToAction img={<></>} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-call-to-action')).toBeInTheDocument();
  });

  it('should render the provided `img` prop', () => {
    const { baseElement } = render(
      <CallToAction img={<span data-testid="nek-call-to-action-img-test"></span>} />
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-call-to-action-img-test')).toBeInTheDocument();
  });

  it('should render the provided provided children', () => {
    const { baseElement } = render(
      <CallToAction img={<></>}>
        {[0, 1].map((value, index) => (
          <span
            data-testid="nek-call-to-action-children-item-test"
            key={index}
          ></span>
        ))}
      </CallToAction>
    );
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('nek-call-to-action-children-wrapper')
    ).toBeInTheDocument();
    const children = screen.getAllByTestId('nek-call-to-action-children-item-test');
    children.forEach((child) => {
      expect(child).toBeInTheDocument();
    })
    expect(children).toHaveLength(2);
  });
});
