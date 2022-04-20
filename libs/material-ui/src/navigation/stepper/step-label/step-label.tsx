import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel';
import './step-label.module.scss';

/* eslint-disable-next-line */
export interface StepLabelProps extends MuiStepLabelProps {}

export function StepLabel(props: StepLabelProps) {
  return <MuiStepLabel data-testid="mui-step-label" {...props} />;
}

export default StepLabel;
