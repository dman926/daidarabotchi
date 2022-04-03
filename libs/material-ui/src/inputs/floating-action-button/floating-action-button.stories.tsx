import { Story, Meta } from '@storybook/react';
import {
  FloatingActionButton,
  FloatingActionButtonProps,
} from './floating-action-button';

export default {
  component: FloatingActionButton,
  title: 'Material-UI/Inputs/FloatingActionButton',
} as Meta;

const Template: Story<FloatingActionButtonProps> = (args) => (
  <FloatingActionButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
