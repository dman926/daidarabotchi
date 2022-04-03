import { Story, Meta } from '@storybook/react';
import Avatar from '../../data-display/avatar/avatar';
import List from '../../data-display/list/list';
import { Dialog, DialogProps } from './dialog';
import DialogTitle from './dialog-title/dialog-title';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ListItemAvatar from '../../data-display/list/list-item-avatar/list-item-avatar';
import ListItemText from '../../data-display/list/list-item-text/list-item-text';
import ListItemButton from '../../data-display/list/list-item-button/list-item-button';
import Typography from '../../data-display/typography/typography';
import Button from '../../inputs/button/button';
import { blue } from '@mui/material/colors';
import { useState } from 'react';

export default {
  component: Dialog,
  title: 'Material-UI/Feedback/Dialog',
} as Meta;

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItemButton
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItemButton>
        ))}
        <ListItemButton
          autoFocus
          onClick={() => handleListItemClick('addAccount')}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItemButton>
      </List>
    </Dialog>
  );
};

const Template: Story<DialogProps> = (args) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
