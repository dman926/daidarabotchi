import { Story, Meta } from '@storybook/react';
import ToggleButtonGroup, { ToggleBtnGroupParams } from './toggle-button-group';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from './toggle-button/toggle-button';
import { useState } from '@storybook/addons';
import { MouseEvent } from 'react';

export default {
  component: ToggleButtonGroup,
  title: 'Material-UI/Inputs/ToggleButtonGroup',
} as Meta;

const Template: Story<ToggleBtnGroupParams> = (args) => {
  const [alignment, setAlignment] = useState<string | null>(null);

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup {...args} value={alignment} exclusive onChange={handleAlignment}>
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
