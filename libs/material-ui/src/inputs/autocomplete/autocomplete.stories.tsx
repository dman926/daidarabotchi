import { Story, Meta } from '@storybook/react';
import { Autocomplete, AutocompleteProps } from './autocomplete';
import { TextField } from '../text-field/text-field';
import compounds from '../../assets/datasets/chemicalNames';

export default {
  component: Autocomplete,
  title: 'Material-UI/Inputs/Autocomplete',
} as Meta;

const Template: Story<
  AutocompleteProps<
    { label: string; year: number },
    undefined,
    undefined,
    undefined,
    'div'
  >
> = (args) => (
  <Autocomplete
    disablePortal
    options={compounds}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Compound" />}
  />
);

export const Primary = Template.bind({});
Primary.args = {};