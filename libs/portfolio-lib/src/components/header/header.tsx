/* eslint-disable react/jsx-props-no-spreading */
import { Box, Divider } from '@daidarabotchi/material-ui';
import { styled } from '@mui/material';
import { Contact, ContactProps } from '../contact/contact';
import { HeaderName, HeaderNameProps } from './header-name/header-name';

export interface HeaderProps {
  name?: HeaderNameProps;
  subtitleName?: HeaderNameProps;
  contact?: ContactProps;
}

const SpacedDivider = styled(Divider)({
  marginTop: 12,
});

export function Header({ name, subtitleName, contact }: HeaderProps) {
  return (
    <>
      <Box data-testid="portfolio-header">
        {name && <HeaderName {...name} />}
        {subtitleName && <HeaderName {...subtitleName} subtitle />}
        {contact && <Contact {...contact} />}
      </Box>
      <SpacedDivider />
    </>
  );
}

export default Header;
