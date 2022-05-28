/* eslint-disable react/function-component-definition */
/* eslint-disable prefer-arrow-callback */
import { forwardRef, useState, SyntheticEvent } from 'react';
import { Story } from '@storybook/react';
import Alert from '@mui/material/Alert';
import Snackbar, { SnackbarProps } from '../snackbar';
import { AlertProps } from '../../alert/alert';
import Stack from '../../../layout/stack/stack';
import Button from '../../../inputs/button/button';

// our wrapped alert appears to break because "Cannot read properties of null (reading 'scrollTop')"
// above error happens when you try clicking the "open success snackbar" button

const CustomizedAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <Alert elevation={6} ref={ref} variant="filled" {...props} />
));

export const WithAlertTemplate: Story<SnackbarProps> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        {...args}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <CustomizedAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          This is a success message!
        </CustomizedAlert>
      </Snackbar>
      <CustomizedAlert severity="error">
        This is an error message!
      </CustomizedAlert>
      <CustomizedAlert severity="warning">
        This is a warning message!
      </CustomizedAlert>
      <CustomizedAlert severity="info">
        This is an information message!
      </CustomizedAlert>
      <CustomizedAlert severity="success">
        This is a success message!
      </CustomizedAlert>
    </Stack>
  );
};

export default WithAlertTemplate;
