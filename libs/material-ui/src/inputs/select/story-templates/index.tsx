/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { MenuItem, FormControl } from '@mui/material';
import { useState } from '@storybook/addons';
import { Select, SelectProps } from '../select';
import { InputLabel } from '../../input-label/input-label';

export const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        {...{
          ...args,
          value: value || '',
          onChange: (event) => setValue(event.target.value as number | null),
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Template;
