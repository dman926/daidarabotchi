/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@daidarabotchi/material-ui';
import { Contact, ContactProps } from '../contact/contact';
import { HeaderName, HeaderNameProps } from './header-name/header-name';

export interface HeaderProps {
  name?: HeaderNameProps;
  subtitleName?: HeaderNameProps;
  contact?: ContactProps;
}

export function Header({ name, subtitleName, contact }: HeaderProps) {
  return (
    <Box data-testid="portfolio-header">
      {name && <HeaderName {...name} />}
      {subtitleName && <HeaderName {...subtitleName} subtitle />}
      {contact && <Contact {...contact} />}
    </Box>
  );
}

export default Header;
