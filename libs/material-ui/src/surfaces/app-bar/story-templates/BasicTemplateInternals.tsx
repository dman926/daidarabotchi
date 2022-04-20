import React from 'react'
import IconButton from '@mui/material/IconButton'
import Button from '../../../inputs/button/button';
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '../../../data-display/typography/typography';

export const BasicTemplateInternals = function SearchInternals(props: any): JSX.Element { 
  return (
    <>
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </>
  );
}