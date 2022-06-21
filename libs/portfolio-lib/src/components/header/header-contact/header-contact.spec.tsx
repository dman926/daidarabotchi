import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HeaderContact, HeaderContactProps } from './header-contact';

const props1: HeaderContactProps = {
  email: [
    {
      type: 'Work',
      email: 'test@test.com',
    },
  ],
};

const props2: HeaderContactProps = {
  phone: [
    {
      type: 'Work',
      phone: '1234567890',
    },
  ],
};

const props3: HeaderContactProps = {
  address: {
    street: '1234 Fake Street',
    city: 'Faketown',
    state: 'Fakestate',
    zip: '01234',
    country: 'Fakeland',
  },
};

const props4: HeaderContactProps = {
  ...props1,
  ...props2,
  ...props3,
};

const props = [props1, props2, props3, props4];

describe('Header Contact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderContact />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-header-contact')).toBeInTheDocument();
  });

  it('should render props successfully', () => {
    props.forEach((inProps) => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const { baseElement } = render(<HeaderContact {...inProps} />);
      expect(baseElement).toBeTruthy();
      expect(
        screen.getByTestId('portfolio-header-contact')
      ).toBeInTheDocument();
      Object.entries(inProps).forEach(([key, value]) => {
        if (key === 'email' || key === 'phone') {
          const el = screen.getByTestId(`portfolio-header-contact-${key}`);
          const textContent = (
            value as { type?: string; email?: string; phone?: string }
          )[key];
          expect(textContent).not.toBeUndefined();
          expect(el).toBeInTheDocument();
          if (textContent) {
            expect(el).toHaveTextContent(textContent);
          }
        } else {
          Object.entries(value as HeaderContactProps).forEach(
            ([innerKey, innerValue]) => {
              const el = screen.getByTestId(
                `portfolio-header-contact-address-${innerKey}`
              );
              expect(el).toBeInTheDocument();
              if (innerValue) {
                expect(el).toHaveTextContent(innerValue);
              }
            }
          );
        }
      });
      cleanup();
    });
  });
});
