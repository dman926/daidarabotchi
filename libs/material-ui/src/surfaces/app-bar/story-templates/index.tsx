/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { AppBar, AppBarProps } from '../app-bar';
import Toolbar from '../toolbar/toolbar';
import Box from '../../../layout/box/box';
import { BasicSearchInternals } from './BasicSearchInternals';
import { BasicTemplateInternals } from './BasicTemplateInternals';
import { WithMenuInternals } from './WithMenuInternals';

export const createTemplate = (Component: React.ReactElement) => {
  const BasicTemplate: Story<AppBarProps> = (args) => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" style={{ top: 0, left: 0 }} {...args}>
        <Toolbar>{Component}</Toolbar>
      </AppBar>
    </Box>
  );

  return BasicTemplate;
};

export { BasicSearchInternals, BasicTemplateInternals, WithMenuInternals };
