import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';

/* eslint-disable-next-line */
export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {}

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return <MuiToggleButtonGroup data-testid="mui-toggle-btn-group" {...props} />;
}

export default ToggleButtonGroup;
