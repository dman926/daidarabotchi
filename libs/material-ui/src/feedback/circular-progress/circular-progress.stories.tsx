import { Story, Meta } from '@storybook/react';
import { CircularProgress, CircularProgressProps } from './circular-progress';

export default {
  component: CircularProgress,
  title: 'Material-UI/Feedback/CircularProgress',
} as Meta;

const Template: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
