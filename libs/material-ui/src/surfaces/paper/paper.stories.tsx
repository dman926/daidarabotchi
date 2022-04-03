import { Story, Meta } from '@storybook/react';
import { Paper, PaperProps } from './paper';

export default {
  component: Paper,
  title: 'Material-UI/Surfaces/Paper',
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args}>CONTENT</Paper>;

export const Primary = Template.bind({});
Primary.args = {
  classes: undefined,
  elevation: undefined,
  square: undefined,
  sx: undefined,
  variant: undefined,
};
