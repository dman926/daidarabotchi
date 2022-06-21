/* eslint-disable react/jsx-props-no-spreading */
import { Box, Divider } from '@daidarabotchi/material-ui';
import {
  HeaderContact,
  HeaderContactProps,
} from './header-contact/header-contact';
import { HeaderName, HeaderNameProps } from './header-name/header-name';

export interface HeaderProps {
  name?: HeaderNameProps;
  subtitleName?: HeaderNameProps;
  contact?: HeaderContactProps;
}

export function Header({ name, subtitleName, contact }: HeaderProps) {
  return (
    <>
      <Box data-testid="portfolio-header">
        {name && <HeaderName {...name} />}
        {subtitleName && <HeaderName {...subtitleName} subtitle />}
        {contact && <HeaderContact {...contact} />}
      </Box>
      <Divider />
    </>
  );
}

export default Header;
