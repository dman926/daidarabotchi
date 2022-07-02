/* eslint-disable react/jsx-props-no-spreading */

import { styled } from '@mui/material';
import { Container, Stack } from '@daidarabotchi/material-ui';
import {
  Footer,
  FooterProps,
  Header,
  HeaderProps,
  ProjectExperience,
  ProjectExperienceProps,
  WorkExperience,
  WorkExperienceProps,
} from '@daidarabotchi/portfolio-lib';
import { Key } from 'react';

type WrappedElement<TType> = { id: Key; element: TType };
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi. Eu ultrices vitae auctor eu augue ut lectus. Lorem donec massa sapien faucibus et molestie ac feugiat. Ultrices dui sapien eget mi proin sed.';

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

const workExperiences: WrappedElement<WorkExperienceProps>[] = [];
const projectExperiences: WrappedElement<ProjectExperienceProps>[] = [
  {
    id: 'project-alpha',
    element: {
      title: 'Project Alpha',
      subheader: 'The first project',
      content: lorem,
      media: ['/test-assets/jpg/test1.jpg', '/test-assets/jpg/test2.jpg'],
      startDate: (() => {
        const tmp = new Date();
        tmp.setFullYear(tmp.getFullYear() - 5);
        return tmp;
      })(),
      endDate: (() => {
        const tmp = new Date();
        tmp.setFullYear(tmp.getFullYear() - 3);
        return tmp;
      })(),
      location: 'Faketown, Fakeland',
    },
  },
  {
    id: 'project-beta',
    element: {
      title: 'Project Beta',
      subheader: 'The second project',
      content: lorem,
      media: ['/test-assets/jpg/test3.jpg'],
      startDate: (() => {
        const tmp = new Date();
        tmp.setFullYear(tmp.getFullYear() - 4);
        return tmp;
      })(),
      endDate: (() => {
        const tmp = new Date();
        tmp.setFullYear(tmp.getFullYear() - 3);
        return tmp;
      })(),
    },
  },
  {
    id: 'project-gamma',
    element: {
      title: 'Project Gamma',
      content: lorem,
      startDate: (() => {
        const tmp = new Date();
        tmp.setFullYear(tmp.getFullYear() - 2);
        return tmp;
      })(),
      noPresent: true,
    },
  },
  {
    id: 'project-delta',
    element: {
      title: 'Project Delta',
      content: lorem,
      startDate: (() => {
        const tmp = new Date();
        tmp.setFullYear(tmp.getFullYear() - 1);
        return tmp;
      })(),
    },
  },
];

const footerProps: FooterProps = {};

const SpacedContainer = styled(Container)({
  marginTop: 12,
  marginBottom: 12,
});

export function Resume() {
  return (
    <Container itemScope itemType="https://schema.org/Person">
      <Header {...headerProps} />
      <br />
      <Stack spacing={2}>
        {workExperiences.map((experience) => (
          <WorkExperience key={experience.id} compact {...experience.element} />
        ))}
      </Stack>
      <Stack spacing={2}>
        {projectExperiences.map((experience) => (
          <ProjectExperience
            key={experience.id}
            compact
            {...experience.element}
          />
        ))}
      </Stack>
      <Footer {...footerProps} />
    </Container>
  );
}

export default Resume;
