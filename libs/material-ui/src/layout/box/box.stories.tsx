import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './box';

export default {
  component: Box,
  title: 'Material-UI/Layout/Box',
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sx: {
    width: 300,
    height: 300,
    backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  },
};
