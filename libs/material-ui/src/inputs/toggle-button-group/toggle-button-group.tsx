import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ToggleBtnGroupParams extends ToggleButtonGroupProps {}

export function ToggleButtonGroup(props: ToggleBtnGroupParams) {
  return <MuiToggleButtonGroup data-testid="mui-toggle-btn-group" {...props} />;
}

export default ToggleButtonGroup;
