import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header, HeaderMenuItemProps, HeaderProps } from './header';

const TITLE = 'Test Site';
function SimpleHeader(props: Partial<HeaderProps>) {
  const { navigate, currentRoute = '', menu = [] } = props;

  return (
    <Header
      navigate={(url, options) => {
        if (navigate) {
          navigate(url, options);
        }
      }}
      title={TITLE}
      currentRoute={currentRoute}
      menu={menu}
    />
  );
}

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
