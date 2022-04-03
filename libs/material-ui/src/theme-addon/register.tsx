import React, { useCallback } from 'react';

import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ThemeOptions } from '@mui/material';
import { ArgsTable } from '@storybook/components';
import { useStorybookState, useGlobals, Args } from '@storybook/api';
import { FORCE_RE_RENDER } from '@storybook/core-events';

const ADDON_ID = 'theme';
const PANEL_ID = `${ADDON_ID}/panel`;

const rows = {
  mode: {
    key: 'lightDark',
    name: 'Dark Mode?',
    control: {
      type: 'boolean',
    },
  },
  primary: {
    key: 'primaryColor',
    name: 'Primary Color',
    control: {
      type: 'color',
    },
  },
  secondary: {
    key: 'secondaryColor',
    name: 'Secondary Color',
    control: {
      type: 'color',
    },
  },
  error: {
    key: 'errorColor',
    name: 'Error Color',
    control: {
      type: 'color',
    },
  },
  warning: {
    key: 'warningColor',
    name: 'Warning Color',
    control: {
      type: 'color',
    },
  },
  info: {
    key: 'infoColor',
    name: 'Info Color',
    control: {
      type: 'color',
    },
  },
  success: {
    key: 'successColor',
    name: 'Success Color',
    control: {
      type: 'color',
    },
  },
  textPrimary: {
    key: 'textPrimaryColor',
    name: 'Text Primary Color',
    control: {
      type: 'color',
    },
  },
  textSecondary: {
    key: 'textSecondaryColor',
    name: 'Text Secondary Color',
    control: {
      type: 'color',
    },
  },
};

// give a unique name for the panel
const MyPanel = () => {
  const [globals, updateGlobals] = useGlobals();
  const { path } = useStorybookState();

  const refreshAndUpdateGlobal = useCallback(
    (themeArgs: Args) => {
      const newThemeArgs = {...globals['themeArgs'], ...themeArgs};
      console.log('----');
      console.log(globals['themeArgs']);
      console.log(themeArgs);
      console.log(newThemeArgs);
      const muiTheme: ThemeOptions = {
        palette: {
          mode: newThemeArgs['lightDark'] ? 'dark' : 'light',
        },
      };
      if (muiTheme.palette) {
        if (newThemeArgs['primaryColor']) {
          muiTheme.palette.primary = { main: newThemeArgs['primaryColor'] };
        }
        if (newThemeArgs['secondaryColor']) {
          muiTheme.palette.secondary = { main: newThemeArgs['secondaryColor'] };
        }
        if (newThemeArgs['errorColor']) {
          muiTheme.palette.error = { main: newThemeArgs['errorColor'] };
        }
        if (newThemeArgs['warningColor']) {
          muiTheme.palette.warning = { main: newThemeArgs['warningColor'] };
        }
        if (newThemeArgs['infoColor']) {
          muiTheme.palette.info = { main: newThemeArgs['infoColor'] };
        }
        if (newThemeArgs['successColor']) {
          muiTheme.palette.success = { main: newThemeArgs['successColor'] };
        }
        if (muiTheme.palette.text) {
          if (newThemeArgs['textPrimaryColor']) {
            muiTheme.palette.text.primary = newThemeArgs['textPrimaryColor'];
          }
          if (newThemeArgs['textSecondaryColor']) {
            muiTheme.palette.text.secondary = newThemeArgs['textSecondaryColor'];
          }
        }
      }
      updateGlobals({ themeArgs: newThemeArgs, muiTheme });
      addons.getChannel().emit(FORCE_RE_RENDER);
    },
    [globals, updateGlobals]
  );

  const resetGlobals = useCallback(() => {
    updateGlobals({ themeArgs: {}, muiTheme: {} });
  }, [updateGlobals]);

  return (
    <ArgsTable
      {...{
        key: path,
        rows,
        compact: true,
        args: globals['themeArgs'],
        updateArgs: refreshAndUpdateGlobal,
        resetArgs: resetGlobals,
        inAddonPanel: true,
      }}
    />
  );
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme',
    render: ({ active, key }) => (
      <AddonPanel active={!!active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
