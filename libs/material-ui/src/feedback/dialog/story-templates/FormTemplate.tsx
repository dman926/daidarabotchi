/* eslint-disable react/function-component-definition */
import { useState } from 'react';
import { Story } from '@storybook/react';
import Button from '../../../inputs/button/button';
import TextField from '../../../inputs/text-field/text-field';
import Dialog, { DialogProps } from '../dialog';
import DialogActions from '../dialog-actions/dialog-actions';
import DialogContent from '../dialog-content/dialog-content';
import DialogContentText from '../dialog-content-text/dialog-content-text';
import DialogTitle from '../dialog-title/dialog-title';

export const FormTemplate: Story<DialogProps> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormTemplate;
