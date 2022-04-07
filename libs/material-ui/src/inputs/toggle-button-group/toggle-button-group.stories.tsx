import { Story, Meta } from '@storybook/react';
import ToggleButtonGroup, { ToggleBtnGroupParams } from './toggle-button-group';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { ToggleButton } from '@mui/material';

export default {
  component: ToggleButtonGroup,
  title: 'Material-UI/Inputs/ToggleButtonGroup',
} as Meta;

const Template: Story<ToggleBtnGroupParams> = (args) => (
  <ToggleButtonGroup {...args} />
);

export const Primary = Template.bind({});
const MockComponent = () => (
  /* 
TODO: Set up custom logic similar to what we have in tabs, to replicate a selected icon after selection.
Currently it works as is, but in order to make this component reusable with children components, we would need some logic
*/ <>
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
  </>
);
Primary.args = {
  children: <MockComponent />,
};
