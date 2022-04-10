import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from './select';
import { InputLabel } from '../input-label/input-label';
import { MenuItem, FormControl } from '@mui/material';
import { useState } from 'react';
import Box from '../../layout/box/box';

export default {
  component: Select,
  title: 'Material-UI/Inputs/Select',
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <Box sx={{ minWidth: '10em' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          {...{
            ...args,
            value: value || '',
            onChange: (event, child) =>
              setValue(event.target.value as number | null),
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
