import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HeaderName, HeaderNameProps } from './header-name';
import { camelToKebab } from '../../../utils';

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
        const el = screen.getByTestId(
          `portfolio-header-name-${camelToKebab(key)}`
        );
        expect(el).toBeInTheDocument();
        if (value) {
          expect(el).toHaveTextContent(value);
        }
      });
      cleanup();
    });
  });
});
