import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header, { HeaderMenuItemProps, HeaderProps } from './header';

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

  it('should have the correct title', () => {
    const { baseElement } = render(<SimpleHeader currentRoute="" />);
    expect(baseElement).toBeTruthy();
    const title = screen.getByTestId('nek-header-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(TITLE);
  });

  it('should have the correct menu', () => {
    const menu: HeaderMenuItemProps[] = [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Settings',
        link: '/settings',
      },
    ];
    const { baseElement } = render(
      <SimpleHeader currentRoute="" menu={menu} />
    );
    expect(baseElement).toBeTruthy();
    const headerMenu = screen.getByTestId('nek-header-menu');
    expect(headerMenu).toBeInTheDocument();
    expect(headerMenu.children).toHaveLength(menu.length);
  });
});
