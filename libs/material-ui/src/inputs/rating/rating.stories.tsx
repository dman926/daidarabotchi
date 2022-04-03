import { Story, Meta } from '@storybook/react';
import { Rating, RatingProps } from './rating';

export default {
  component: Rating,
  title: 'Material-UI/Inputs/Rating',
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
