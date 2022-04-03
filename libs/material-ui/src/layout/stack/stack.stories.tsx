import { Story, Meta } from '@storybook/react';
import { Stack, StackProps } from './stack';
import { Box } from '../box/box';
import { Paper } from '../../surfaces/paper/paper';
import { styled } from '@mui/material/styles';


export default {
  component: Stack,
  title: 'Material-UI/Layout/Stack',
} as Meta;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Template: Story<StackProps> = (args) => (
  <Box sx={{ width: '100%' }}>
    <Stack {...{...args, spacing: 2}}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {};
