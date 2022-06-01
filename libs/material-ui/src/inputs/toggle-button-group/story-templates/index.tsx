/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { useState } from '@storybook/addons';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { ToggleButton } from '@mui/material';
import { MouseEvent } from 'react';
import {
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '../toggle-button-group';

export const Template: Story<ToggleButtonGroupProps> = (args) => {
  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup {...args} value={alignment} onChange={handleAlignment}>
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Template;
