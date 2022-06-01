/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
import { useState, ComponentType, ReactElement } from 'react';
import { Story } from '@storybook/react';
import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import Grow, { GrowProps } from '@mui/material/Grow';
import { TransitionProps } from '@mui/material/transitions';
import Button from '../../../inputs/button/button';
import Snackbar, { SnackbarProps } from '../snackbar';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

export const TransitionsTemplate: Story<SnackbarProps> = (args) => {
  const [state, setState] = useState<{
    open: boolean;
    Transition: ComponentType<
      TransitionProps & {
        children: ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: ComponentType<
        TransitionProps & {
          children: ReactElement<any, any>;
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        {...args}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
      />
    </div>
  );
};

export default TransitionsTemplate;
