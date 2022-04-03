import { Story, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps } from './radio-group';
import { Radio } from '../radio/radio';
import { FormControl, FormLabel, FormControlLabel } from '@mui/material';

export default {
  component: RadioGroup,
  title: 'Material-UI/Inputs/RadioGroup',
} as Meta;

const Template: Story<RadioGroupProps> = (args) => (
  <FormControl>
    <FormLabel>Gender</FormLabel>
    <RadioGroup
      {...{...args, defaultValue: 'female'}}
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
);

export const Primary = Template.bind({});
Primary.args = {};
