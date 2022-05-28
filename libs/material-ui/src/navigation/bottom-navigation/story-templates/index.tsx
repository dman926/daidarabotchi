/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';
import { useState } from '@storybook/addons';
import { BottomNavigation, BottomNavigationProps } from '../bottom-navigation';
import BottomNavigationAction from '../bottom-navigation-action/bottom-navigation-action';

export const Template: Story<BottomNavigationProps> = (args) => {
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <BottomNavigation
      {...args}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default Template;
