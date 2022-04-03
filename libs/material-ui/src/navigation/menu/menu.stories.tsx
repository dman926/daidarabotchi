import { Story, Meta } from '@storybook/react';
import Button from '../../inputs/button/button';
import { Menu, MenuProps } from './menu';
import MenuItem from './menu-item/menu-item';
import { useState } from 'react';

export default {
  component: Menu,
  title: 'Material-UI/Navigation/Menu',
} as Meta;

const Template: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        Menu
      </Button>
      <Menu
        {...args}
        open={open}
        anchorEl={anchorEl}
        onClose={(event) => setAnchorEl(null)}
      >
        <MenuItem onClick={(event) => setAnchorEl(null)}>Item 1</MenuItem>
        <MenuItem onClick={(event) => setAnchorEl(null)}>Item 2</MenuItem>
      </Menu>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  autoFocus: undefined,
  disableAutoFocusItem: undefined,
  variant: undefined,
};
