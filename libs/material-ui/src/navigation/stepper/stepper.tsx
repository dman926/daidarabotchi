import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper';
import './stepper.module.scss';

/* eslint-disable-next-line */
export interface StepperProps extends MuiStepperProps {}

export function Stepper(props: StepperProps) {
  return <MuiStepper data-testid="mui-stepper" {...props} />;
}

export default Stepper;
