import { Box, Typography } from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';
import { notEmpty } from '../../../utils';
import { Address } from '../../../models';

export interface HeaderContactProps {
  email?: { type?: string; email: string }[];
  phone?: { type?: string; phone: string }[];
  address?: Address;
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
    <Box data-testid="portfolio-header-contact">
      {address && (
        <Box
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
          data-testid="portfolio-header-address"
        >
          {[
            {
              field: street,
              itemProp: 'streetAddress',
              testid: 'portfolio-header-contact-address-street',
            },
            {
              field: city,
              itemProp: 'addressLocality',
              testid: 'portfolio-header-contact-address-city',
            },
            {
              field: state,
              itemProp: 'addressRegion',
              testid: 'portfolio-header-contact-address-state',
            },
            {
              field: zip,
              itemProp: 'postalCode',
              testid: 'portfolio-header-contact-address-zip',
            },
            {
              field: country,
              itemProp: 'addressCountry',
              testid: 'portfolio-header-contact-address-country',
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
      {/* TODO: add nav links for emailto: and tel: */}
      {email?.map(({ type, email: emailAddress }) => (
        <Box
          key={emailAddress}
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
          data-testid="portfolio-header-contact-email"
        >
          <meta itemProp="contactType" content={type} />
          <Typography itemProp="email">{emailAddress}</Typography>
        </Box>
      ))}
      {phone?.map(({ type, phone: phoneNumber }) => (
        <Box
          key={phoneNumber}
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
          data-testid="portfolio-header-contact-phone"
        >
          <meta itemProp="contactType" content={type} />
          <Typography itemProp="telephone">{phoneNumber}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default HeaderContact;
