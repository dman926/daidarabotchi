import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ToggleBtnGroupParams extends ToggleButtonGroupProps {}

export function ToggleButtonGroup(props: ToggleBtnGroupParams) {
  // TODO: Continue improvements to display buttons as selected when appropriate.
  const [alignment, setAlignment] = useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    debugger;
    setAlignment(newAlignment);
  };
  return (
    <MuiToggleButtonGroup
      data-testid="mui-toggle-btn-group"
      {...props}
      exclusive
      onChange={handleAlignment}
      value={alignment}
    >
      {props.children}
    </MuiToggleButtonGroup>
  );
}

export default ToggleButtonGroup;
