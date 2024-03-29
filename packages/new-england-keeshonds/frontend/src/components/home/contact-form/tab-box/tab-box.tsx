import {
  Box,
  Paper,
  PaperProps as MuiPaperProps,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

/* eslint-disable-next-line */
export interface TabBoxProps {
  head?: string;
  tabs: {
    key: number;
    icon?:
      | string
      | ReactElement<unknown, string | JSXElementConstructor<unknown>>;
    label?: string;
    content: ReactNode;
  }[];
  PaperProps?: MuiPaperProps;
}

export function TabBox({ head, tabs, PaperProps = {} }: TabBoxProps) {
  const [currentTab, setCurrentTab] = useState<number | false>(false);

  return (
    <Paper
      elevation={4}
      sx={{ padding: '1em' }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...PaperProps}
      data-testid="nek-tab-box"
    >
      {!!head && (
        <Typography variant="h5" align="center" data-testid="nek-tab-box-head">
          {head}
        </Typography>
      )}
      <Box data-testid="nek-tab-box-tab-wrapper">
        <Box>
          <Tabs
            value={currentTab}
            onChange={(event, newValue) => {
              setCurrentTab(newValue);
            }}
            centered
            data-testid="nek-tab-box-tabs"
          >
            {tabs.map((tab) => (
              <Tab
                icon={tab.icon}
                label={tab.label}
                key={tab.key}
                data-testid="nek-tab-box-tab"
              />
            ))}
          </Tabs>
        </Box>
        {tabs.map((tab, index) => (
          <Box role="tabpanel" hidden={currentTab !== index} key={tab.key}>
            {currentTab === index && tab.content}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default TabBox;
