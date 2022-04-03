import { Story, Meta } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './breadcrumbs';
import { Link } from '../link/link';
import { Typography } from '../../data-display/typography/typography';
import { MemoryRouter } from 'react-router-dom';

export default {
  component: Breadcrumbs,
  title: 'Material-UI/Navigation/Breadcrumbs',
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => (
  <MemoryRouter>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit">
        MUI
      </Link>
      <Link underline="hover" color="inherit">
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
