/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import { Story } from '@storybook/react';
import { useState } from 'react'; // Using `useState` from '@storybook/addons' doesn't work with `anchorEl`.
import Button from '../../../inputs/button/button';
import { Menu, MenuProps } from '../menu';
import MenuItem from '../menu-item/menu-item';

export const Template: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Menu</Button>
      <Menu {...args} open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Item 2</MenuItem>
      </Menu>
    </>
  );
};
