import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import Button from '../../inputs/button/button';
import CircularProgress from '../circular-progress/circular-progress';
import { Backdrop, BackdropProps } from './backdrop';

export default {
  component: Backdrop,
  title: 'Material-UI/Feedback/Backdrop',
} as Meta;

const Template: Story<BackdropProps> = (args) => {
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

export const Primary = Template.bind({});
Primary.args = {};
