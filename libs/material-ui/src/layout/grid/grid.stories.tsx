import { Story, Meta } from '@storybook/react';
import { Grid, GridProps } from './grid';
import { Paper } from '../../surfaces/paper/paper';
import { styled, Theme } from '@mui/material'

export default {
  component: Grid,
  title: 'Material-UI/Layout/Grid',
} as Meta;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Template: Story<GridProps> = (args) => (
  <Grid {...args} container spacing={2}>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
  </Grid>
);

export const Primary = Template.bind({});
Primary.args = {};
