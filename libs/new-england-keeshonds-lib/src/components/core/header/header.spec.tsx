import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header, { HeaderProps } from './header';

const TITLE = 'Test Site';
const SimpleHeader = (props: Partial<HeaderProps>) => (
  <Header
    navigate={(url, options) => {
      props.navigate ? props.navigate(url, options) : null;
    }}
    title={TITLE}
    currentRoute={props.currentRoute ? props.currentRoute : ''}
    menu={props.menu ? props.menu : []}
  />
);

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleHeader currentRoute="" />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-header')).toBeInTheDocument();
  });

  it('should have a title with the same text as the provided `title` prop', () => {
    const { baseElement } = render(<SimpleHeader currentRoute="" />);
    expect(baseElement).toBeTruthy();
    const title = screen.getByTestId('nek-header-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(TITLE);
  });
});
