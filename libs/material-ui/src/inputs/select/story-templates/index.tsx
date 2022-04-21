import { Story } from '@storybook/react';
import { Select, SelectProps } from '../select';
import { InputLabel } from '../../input-label/input-label';
import { MenuItem, FormControl } from '@mui/material';
import { useState } from '@storybook/addons';

export const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState<number | null>(null);
  return (
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
  );
};
