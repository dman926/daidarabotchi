import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step';

/* eslint-disable-next-line */
export interface StepProps extends MuiStepProps {}

export function Step(props: StepProps) {
  return <MuiStep data-testid="mui-stepper" {...props} />;
}

export default Step;
