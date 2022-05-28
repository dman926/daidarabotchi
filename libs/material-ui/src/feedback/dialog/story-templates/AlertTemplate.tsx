/* eslint-disable react/function-component-definition */
import { useState } from 'react';
import { Story } from '@storybook/react';
import Button from '../../../inputs/button/button';
import { Dialog, DialogProps } from '../dialog';
import DialogActions from '../dialog-actions/dialog-actions';
import DialogContent from '../dialog-content/dialog-content';
import DialogContentText from '../dialog-content-text/dialog-content-text';
import DialogTitle from '../dialog-title/dialog-title';

export const AlertTemplate: Story<DialogProps> = (args) => {
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
        Open alert dialog
      </Button>
      <Dialog
        {...args}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Use Google&apos;s location service?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertTemplate;
