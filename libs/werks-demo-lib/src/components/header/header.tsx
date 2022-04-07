import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@daidarabotchi/material-ui';
import MenuIcon from '@mui/icons-material/Menu';
import CartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import { KeyboardEvent, MouseEvent, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps { }

export function Header(props: HeaderProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  }

  const NavList = () => (
    <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Home', 'Build A PC'].map((text, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <ComputerIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
        </List>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='nav menu'
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />

          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>{<NavList />}</Drawer>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Werks Computers
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='cart menu'
            sx={{ mr: 2 }}
          >
            <CartIcon />
          </IconButton>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='account menu'
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
