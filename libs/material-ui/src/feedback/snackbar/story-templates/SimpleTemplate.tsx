/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../../../inputs/button/button';
import IconButton from '../../../inputs/button/icon-button/icon-button';
import { Snackbar, SnackbarProps } from '../snackbar';

export const SimpleTemplate: Story<SnackbarProps> = (args) => {
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

export default SimpleTemplate;
