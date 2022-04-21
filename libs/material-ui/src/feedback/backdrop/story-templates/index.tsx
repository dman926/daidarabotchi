// There was an issue having these directly defined in the MDX file, so they are defined here.

import { Story } from '@storybook/react';
import { useState } from '@storybook/addons';
import Button from '../../../inputs/button/button';
import CircularProgress from '../../circular-progress/circular-progress';
import { Backdrop, BackdropProps } from '../backdrop';

export const Template: Story<BackdropProps> = (args) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
