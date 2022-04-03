// TODO: Something is wrong here because I can't track down the snackbar.
// I have a theory that it is there, but is underneath storybook.
// Tried modifying zIndex of the Snackbar. Didn't work

import { Story, Meta } from '@storybook/react';
import Button from '../../inputs/button/button';
import IconButton from '../../inputs/button/icon-button/icon-button';
import { Snackbar, SnackbarProps } from './snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default {
  component: Snackbar,
  title: 'Material-UI/Feedback/Snackbar',
} as Meta;

const Template: Story<SnackbarProps> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar {...args} open={open} onClose={handleClose} action={action} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  autoHideDuration: 6000,
  message: 'Not achived',
};
