import { Box, Typography } from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';
import { notEmpty } from '../../../utils';

export interface HeaderContactProps {
  email?: { type?: string; email: string }[];
  phone?: { type?: string; phone: string }[];
  address?: {
    street?: string;
    city: string;
    state: string;
    zip?: string;
    country?: string;
  };
}

export function HeaderContact({ email, phone, address }: HeaderContactProps) {
  let street;
  let city;
  let state;
  let zip;
  let country;
  if (address) {
    street = address.street;
    city = address.city;
    state = address.state;
    zip = address.zip;
    country = address.country;
  }
  return (
    <Box>
      {address && (
        <Box
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          {[
            {
              field: street,
              itemProp: 'streetAddress',
              testid: 'header-contact-address-street',
            },
            {
              field: city,
              itemProp: 'addressLocality',
              testid: 'header-contact-address-city',
            },
            {
              field: state,
              itemProp: 'addressRegion',
              testid: 'header-contact-address-state',
            },
            {
              field: zip,
              itemProp: 'postalCode',
              testid: 'header-contact-address-zip',
            },
            {
              field: country,
              itemProp: 'addressCountry',
              testid: 'header-contact-address-country',
            },
          ]
            .map<ReactNode>(
              (t) =>
                t.field && (
                  <Typography
                    key={t.field}
                    itemProp={t.itemProp}
                    data-testid={t.testid}
                  >
                    {t.field}
                  </Typography>
                )
            )
            .filter(notEmpty)}
        </Box>
      )}
    </Box>
  );
}

export default HeaderContact;
