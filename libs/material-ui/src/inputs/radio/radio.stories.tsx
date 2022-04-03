import { Story, Meta } from '@storybook/react';
import { Radio, RadioProps } from './radio';

export default {
  component: Radio,
  title: 'Material-UI/Inputs/Radio',
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
