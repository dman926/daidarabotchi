import { Box, Link, Typography } from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';
import { formatPhoneNumber, isFax, notEmpty } from '../../utils';
import { Address } from '../../models';

export interface ContactProps {
  email?: { type?: string; email: string }[];
  phone?: { type?: string; phone: string }[];
  address?: Address;
}

export function Contact({ email, phone, address }: ContactProps) {
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
    <Box data-testid="portfolio-contact">
      {address && (
        <Box
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
          data-testid="portfolio-contact-address"
        >
          {[
            {
              field: street,
              itemProp: 'streetAddress',
              testid: 'portfolio-contact-address-street',
            },
            {
              field: city,
              itemProp: 'addressLocality',
              testid: 'portfolio-contact-address-city',
            },
            {
              field: state,
              itemProp: 'addressRegion',
              testid: 'portfolio-contact-address-state',
            },
            {
              field: zip,
              itemProp: 'postalCode',
              testid: 'portfolio-contact-address-zip',
            },
            {
              field: country,
              itemProp: 'addressCountry',
              testid: 'portfolio-contact-address-country',
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
      {email?.map(({ type, email: emailAddress }) => (
        <Box
          key={emailAddress}
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
          data-testid="portfolio-contact-email"
        >
          <meta itemProp="contactType" content={type} />
          <Link href={`mailto:${emailAddress}`} itemProp="email">
            {emailAddress}
          </Link>
        </Box>
      ))}
      {phone?.map(({ type, phone: phoneNumber }) => (
        <Box
          key={phoneNumber}
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
          data-testid="portfolio-contact-phone"
        >
          <meta itemProp="contactType" content={type} />
          {type && isFax(type) ? (
            <Typography itemProp="faxNumber">{phoneNumber}</Typography>
          ) : (
            <Link href={`tel:${phoneNumber}`} itemProp="telephone">
              {formatPhoneNumber(phoneNumber)}
            </Link>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default Contact;
