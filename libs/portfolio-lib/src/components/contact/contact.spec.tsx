import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Contact, ContactProps } from './contact';

const props1: ContactProps = {
  email: [
    {
      type: 'Work',
      email: 'test@test.com',
    },
  ],
};

const props2: ContactProps = {
  phone: [
    {
      type: 'Work',
      phone: '1234567890',
    },
  ],
};

const props3: ContactProps = {
  address: {
    street: '1234 Fake Street',
    city: 'Faketown',
    state: 'Fakestate',
    zip: '01234',
    country: 'Fakeland',
  },
};

const props4: ContactProps = {
  ...props1,
  ...props2,
  ...props3,
};

const props = [props1, props2, props3, props4];

describe('Contact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contact />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-contact')).toBeInTheDocument();
  });

  it('should render props successfully', () => {
    props.forEach((inProps) => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const { baseElement } = render(<Contact {...inProps} />);
      expect(baseElement).toBeTruthy();
      expect(screen.getByTestId('portfolio-contact')).toBeInTheDocument();
      Object.entries(inProps).forEach(([key, value]) => {
        if (key === 'email' || key === 'phone') {
          const el = screen.getByTestId(`portfolio-contact-${key}`);
          const textContent = (
            value as { type?: string; email?: string; phone?: string }
          )[key];
          expect(el).toBeInTheDocument();
          if (textContent) {
            expect(el).toHaveTextContent(textContent);
          }
        } else {
          expect(
            screen.getByTestId('portfolio-contact-address')
          ).toBeInTheDocument();
          Object.entries(value as ContactProps).forEach(
            ([innerKey, innerValue]) => {
              const el = screen.getByTestId(
                `portfolio-contact-address-${innerKey}`
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
