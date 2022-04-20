import { useState, forwardRef } from 'react';
import { Story } from '@storybook/react'
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import Button from 'libs/material-ui/src/inputs/button/button'
import Dialog, { DialogProps } from '../dialog';
import ListItemText from 'libs/material-ui/src/data-display/list/list-item-text/list-item-text'
import ListItem from 'libs/material-ui/src/data-display/list/list-item/list-item';
import List from 'libs/material-ui/src/data-display/list/list';
import Divider from 'libs/material-ui/src/data-display/divider/divider'
import AppBar from 'libs/material-ui/src/surfaces/app-bar/app-bar';
import Toolbar from 'libs/material-ui/src/surfaces/app-bar/toolbar/toolbar';
import IconButton from 'libs/material-ui/src/inputs/button/icon-button/icon-button';
import Typography from 'libs/material-ui/src/data-display/typography/typography';
import Slide from '../slide/slide';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FullScreenTemplate: Story<DialogProps> = (args) =>  {
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
}