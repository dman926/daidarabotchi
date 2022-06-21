import { Box } from '@daidarabotchi/material-ui';
import { Contact, ContactProps } from '../contact/contact';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps {
  contact?: ContactProps;
}

export function Footer({ contact }: FooterProps) {
  return (
    <Box data-testid="portfolio-footer">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {contact && <Contact {...contact} />}
    </Box>
  );
}

export default Footer;
