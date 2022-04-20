import { useState, ComponentType } from 'react';
import { Story } from '@storybook/react'
import Slide, { SlideProps } from '@mui/material/Slide';
import Button from 'libs/material-ui/src/inputs/button/button';
import Snackbar, { SnackbarProps } from '../snackbar';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}
export const SlideDirectionTemplate: Story<SnackbarProps> = (args) => {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState<
    ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick = (Transition: ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick(TransitionLeft)}>Right</Button>
      <Button onClick={handleClick(TransitionUp)}>Up</Button>
      <Button onClick={handleClick(TransitionRight)}>Left</Button>
      <Button onClick={handleClick(TransitionDown)}>Down</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ''}
      />
    </div>
  );
}
