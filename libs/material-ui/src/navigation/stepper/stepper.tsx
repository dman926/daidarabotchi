import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper';
import './stepper.module.scss';

/* eslint-disable-next-line */
export interface StepperProps extends MuiStepperProps {}

export function Stepper(props: StepperProps) {
  return <MuiStepper {...props} />;
}

export default Stepper;
