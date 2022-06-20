import { Container } from '@daidarabotchi/material-ui';
import { Header, HeaderProps } from '@daidarabotchi/portfolio-lib';

const headerProps: HeaderProps = {
  name: {
    firstName: 'Bob',
    lastName: 'Jones',
    suffix: 'Sr',
  },
  subtitleName: {
    nickName: 'Bill',
  },
  contact: {
    email: [{ email: 'test@test.com' }],
    phone: [{ phone: '1234567980' }],
    address: {
      street: '1234 Fake Street',
      city: 'Faketown',
      state: 'Fakestate',
      zip: '01234',
      country: 'Fakeland',
    },
  },
};

export function Resume() {
  return (
    <Container itemScope itemType="https://schema.org/Person">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Header {...headerProps} />
    </Container>
  );
}

export default Resume;
