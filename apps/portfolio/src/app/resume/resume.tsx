/* eslint-disable react/jsx-props-no-spreading */

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
    jobTitle: { break: true, jobTitle: 'Software Developer' },
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
      <Header {...headerProps} />
      {workExperiences.map((experience) => (
        <WorkExperience key={experience.id} {...experience.element} />
      ))}
      {projectExperiences.map((experience) => (
        <ProjectExperience key={experience.id} {...experience.element} />
      ))}
    </Container>
  );
}

export default Resume;
