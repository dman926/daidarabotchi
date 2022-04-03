import { Story, Meta } from '@storybook/react';
import { AppBar, AppBarProps } from './app-bar';
import Toolbar from './toolbar/toolbar';

export default {
  component: AppBar,
  title: 'Material-UI/Surfaces/AppBar',
} as Meta;

const Template: Story<AppBarProps> = (args) => (
  <AppBar {...args}>
    <Toolbar>Toolbar 1</Toolbar>
    <Toolbar>Toolbar 2</Toolbar>
  </AppBar>
);

export const Primary = Template.bind({});
Primary.args = {
  classes: undefined,
  color: undefined,
  enableColorOnDark: undefined,
  position: undefined,
  sx: undefined,
};
