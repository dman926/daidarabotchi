import MuiButtonGroup, {
  ButtonGroupProps as MuiButtonGroupProps,
} from '@mui/material/ButtonGroup';
import './button-group.module.scss';

/* eslint-disable-next-line */
export interface ButtonGroupProps extends MuiButtonGroupProps {}

export function ButtonGroup(props: ButtonGroupProps) {
  return <MuiButtonGroup data-testid="mui-button-group" {...props} />;
}

export default ButtonGroup;
