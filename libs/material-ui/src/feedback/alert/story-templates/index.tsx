import { useState } from '@storybook/addons';
import { Alert, AlertProps } from '../alert';
import CloseIcon from '@mui/icons-material/Close';
import Box from '../../../layout/box/box';
import Button from '../../../inputs/button/button';
import Collapse from '../../../data-display/list/collapse/collapse';
import IconButton from '../../../inputs/button/icon-button/icon-button';
import { Story } from '@storybook/react';

export const AllSeveritiesTemplate: Story<AlertProps> = (args) => (
  <div>
    <Alert sx={{ mb: 2, width: 800 }} {...args} severity="error">
      Error alert!
    </Alert>
    <Alert sx={{ mb: 2, width: 800 }} {...args} severity="warning">
      Warning alert!
    </Alert>
    <Alert sx={{ mb: 2, width: 800 }} {...args} severity="info">
      Info alert!
    </Alert>
    <Alert sx={{ mb: 2, width: 800 }} {...args} severity="success">
      Success alert!
    </Alert>
  </div>
);

export const TextButtonTemplate: Story<AlertProps> = (args) => (
  <Alert
    action={
      <Button color="inherit" size="small">
        UNDO
      </Button>
    }
    sx={{ width: 800 }}
    {...args}
  >
    This alert uses a button!
  </Alert>
);

export const Template: Story<AlertProps> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, width: 800 }}
          {...args}
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
  );
};
