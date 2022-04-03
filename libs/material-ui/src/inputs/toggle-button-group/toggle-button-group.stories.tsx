import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ToggleButtonGroup, ToggleButtonGroupProps } from '@mui/material';
import { ToggleButton } from '../toggle-button/toggle-button';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

export default {
  component: ToggleButton,
  title: 'Material-UI/Inputs/ToggleButtonGroup',
} as Meta;

const Template: Story<ToggleButtonGroupProps> = (args) => {
  const [alignment, setAlignment] = useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      {...{ ...args, value: alignment, onChange: handleAlignment }}
      exclusive
    >
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

export const Primary = Template.bind({});
Primary.args = {};
