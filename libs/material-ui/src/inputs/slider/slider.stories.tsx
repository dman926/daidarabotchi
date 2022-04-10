import { Story, Meta } from '@storybook/react';
import Box from '../../layout/box/box';
import { Slider, SliderProps } from './slider';

export default {
  component: Slider,
  title: 'Material-UI/Inputs/Slider',
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <Box sx={{ minWidth: '15em' }}>
    <Slider {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {};
