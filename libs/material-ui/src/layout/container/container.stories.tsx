import { Story, Meta } from '@storybook/react';
import { Container, ContainerProps } from './container';
import { Box } from '../box/box';

export default {
  component: Container,
  title: 'Material-UI/Layout/Container',
  argTypes: {
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args} sx={{ border: '1px solid red' }}>
    <Box sx={{ bgcolor: '#cfe8fc', width: '4em', height: '4em' }} />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {};
