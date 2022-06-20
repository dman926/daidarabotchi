import { Container } from '@daidarabotchi/material-ui';
import { Header, HeaderProps } from '@daidarabotchi/portfolio-lib';

const headerProps: HeaderProps = {
  name: {
    firstName: 'Dennis James',
    lastName: 'Stelmach',
    suffix: 'JR',
    nickName: 'DJ',
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
