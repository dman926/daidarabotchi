import { Box } from '@daidarabotchi/material-ui';
import {
  GenericExperience,
  GenericExperienceProps,
} from '../generic-experience/generic-experience';
import { Address } from '../../../models';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WorkExperienceProps extends GenericExperienceProps {
  addresses?: Address[];
  brands?: {
    logo?: string;
    slogan?: string;
    name?: string;
  }[];
  contactPoints?: {
    type?: string;
    email?: string;
    faxNumber?: string;
    telephone?: string;
  }[];
  keywords?: string[];
  legalName?: string;
  nonprofitStatus?: string;
}

export function WorkExperience(props: WorkExperienceProps) {
  const {
    addresses,
    brands,
    contactPoints,
    keywords,
    legalName,
    nonprofitStatus,
  } = props;
  return (
    <Box data-testid="portfolio-work-experience">
      <Box
        itemProp="affiliation"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {addresses?.map((address) => (
          <Box
            key={`${address.street} ${address.city}`}
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            {address.street && (
              <meta itemProp="streetAddress" content={address.street} />
            )}
            <meta itemProp="addressLocality" content={address.city} />
            <meta itemProp="addressRegion" content={address.state} />
            {address.zip && (
              <meta itemProp="postalCode" content={address.zip} />
            )}
            {address.country && (
              <meta itemProp="addressCountry" content={address.country} />
            )}
          </Box>
        ))}
        {brands?.map((brand) => (
          <Box
            key={Object.values(brands).join('|')}
            itemProp="brand"
            itemScope
            itemType="https://schema.org/Brand"
          >
            {brand.logo && <meta itemProp="logo" content={brand.logo} />}
            {brand.name && <meta itemProp="name" content={brand.name} />}
            {brand.slogan && <meta itemProp="slogan" content={brand.slogan} />}
          </Box>
        ))}
        {contactPoints?.map((contactPoint) => (
          <Box
            key={Object.values(contactPoint).join('|')}
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            {contactPoint.email && (
              <meta itemProp="email" content={contactPoint.email} />
            )}
            {contactPoint.faxNumber && (
              <meta itemProp="faxNumber" content={contactPoint.faxNumber} />
            )}
            {contactPoint.telephone && (
              <meta itemProp="telephone" content={contactPoint.telephone} />
            )}
            {contactPoint.type && (
              <meta itemProp="contactType" content={contactPoint.type} />
            )}
          </Box>
        ))}
        {keywords && <meta itemProp="keywords" content={keywords.join(',')} />}
        {legalName && <meta itemProp="legalName" content={legalName} />}
        {nonprofitStatus && (
          <meta itemProp="nonprofitStatus" content={nonprofitStatus} />
        )}
      </Box>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GenericExperience {...props} />
    </Box>
  );
}

export default WorkExperience;
