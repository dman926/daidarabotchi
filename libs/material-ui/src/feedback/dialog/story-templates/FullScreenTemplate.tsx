/* eslint-disable react/function-component-definition */
import { useState, forwardRef } from 'react';
import { Story } from '@storybook/react';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import Button from '../../../inputs/button/button';
import Dialog, { DialogProps } from '../dialog';
import ListItemText from '../../../data-display/list/list-item-text/list-item-text';
import ListItem from '../../../data-display/list/list-item/list-item';
import List from '../../../data-display/list/list';
import Divider from '../../../data-display/divider/divider';
import AppBar from '../../../surfaces/app-bar/app-bar';
import Toolbar from '../../../surfaces/app-bar/toolbar/toolbar';
import IconButton from '../../../inputs/button/icon-button/icon-button';
import Typography from '../../../data-display/typography/typography';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

export const FullScreenTemplate: Story<DialogProps> = (args) => {
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
        Open full-screen dialog
      </Button>
      <Dialog
        {...args}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default FullScreenTemplate;
