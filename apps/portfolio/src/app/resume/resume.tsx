import { Container } from '@daidarabotchi/material-ui';
import {
  Header,
  HeaderProps,
  ProjectExperience,
  ProjectExperienceProps,
  WorkExperience,
  WorkExperienceProps,
} from '@daidarabotchi/portfolio-lib';
import { Key } from 'react';

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
    email: [{ type: 'Business', email: 'test@test.com' }],
    phone: [
      { type: 'Business', phone: '1234567890' },
      { type: 'Fax', phone: '0987654321' },
    ],
    address: {
      street: '1234 Fake Street',
      city: 'Faketown',
      state: 'Fakestate',
      zip: '01234',
      country: 'Fakeland',
    },
  },
};

type WrappedElement<TType> = { id: Key; element: TType };

const workExperiences: WrappedElement<WorkExperienceProps>[] = [];
const projectExperiences: WrappedElement<ProjectExperienceProps>[] = [];

export function Resume() {
  return (
    <Container itemScope itemType="https://schema.org/Person">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Header {...headerProps} />
      {workExperiences.map((experience) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WorkExperience key={experience.id} {...experience.element} />
      ))}
      {projectExperiences.map((experience) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProjectExperience key={experience.id} {...experience.element} />
      ))}
    </Container>
  );
}

export default Resume;
