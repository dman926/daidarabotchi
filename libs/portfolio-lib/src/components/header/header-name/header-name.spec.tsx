import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HeaderName, HeaderNameProps } from './header-name';

const props1: HeaderNameProps = {
  firstName: 'Bob',
  middleName: 'Bill',
  prefix: 'De',
  lastName: 'Jones',
  suffix: 'Jr',
};

const props2: HeaderNameProps = {
  nickName: 'BB',
};

const props3: HeaderNameProps = { ...props1, ...props2 };

const props = [props1, props2, props3];

describe('Header Name', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderName />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-header-name')).toBeInTheDocument();
  });

  it('should render props successfully', () => {
    props.forEach((inProps) => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const { baseElement } = render(<HeaderName {...inProps} />);
      expect(baseElement).toBeTruthy();
      expect(screen.getByTestId('portfolio-header-name')).toBeInTheDocument();
      Object.entries(inProps).forEach(([key, value]) => {
        let el;
        switch (key) {
          case 'firstName':
            el = screen.getByTestId('portfolio-header-name-first-name');
            break;
          case 'middleName':
            el = screen.getByTestId('portfolio-header-name-middle-name');
            break;
          case 'nickName':
            el = screen.getByTestId('portfolio-header-name-nick-name');
            break;
          case 'prefix':
            el = screen.getByTestId('portfolio-header-name-prefix');
            break;
          case 'lastName':
            el = screen.getByTestId('portfolio-header-name-last-name');
            break;
          case 'suffix':
            el = screen.getByTestId('portfolio-header-name-suffix');
            break;
          default:
          // Shouldn't happen.
          // Just to satisfy eslint.
        }
        if (el) {
          expect(el).toBeInTheDocument();
          expect(el).toHaveTextContent(value);
        }
      });
      cleanup();
    });
  });
});
