import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CallToAction } from './call-to-action';

describe('CallToAction', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    const { baseElement } = render(<CallToAction img={<></>} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-call-to-action')).toBeInTheDocument();
  });

  it('should render the provided `img` prop', () => {
    const { baseElement } = render(
      <CallToAction img={<span data-testid="nek-call-to-action-img-test" />} />
    );
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('nek-call-to-action-img-test')
    ).toBeInTheDocument();
  });

  it('should render the provided provided children', () => {
    const { baseElement } = render(
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <CallToAction img={<></>}>
        {[0, 1].map((value) => (
          <span
            data-testid="nek-call-to-action-children-item-test"
            key={value}
          />
        ))}
      </CallToAction>
    );
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('nek-call-to-action-children-wrapper')
    ).toBeInTheDocument();
    const children = screen.getAllByTestId(
      'nek-call-to-action-children-item-test'
    );
    children.forEach((child) => {
      expect(child).toBeInTheDocument();
    });
    expect(children).toHaveLength(2);
  });
});
