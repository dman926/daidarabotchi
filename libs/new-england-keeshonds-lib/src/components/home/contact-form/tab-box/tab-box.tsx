import {
  Box,
  Paper,
  PaperProps,
  Tab,
  Tabs,
  Typography,
} from '@daidarabotchi/material-ui';
import { JSXElementConstructor, ReactElement, ReactNode, useState } from 'react';

/* eslint-disable-next-line */
export interface TabBoxProps {
  head?: string;
  tabs: {
    icon?:
      | string
      | ReactElement<any, string | JSXElementConstructor<any>>;
    label?: string;
    content: ReactNode;
  }[];
  PaperProps?: PaperProps;
}

export function TabBox({ head, tabs, PaperProps = {} }: TabBoxProps) {
  const [currentTab, setCurrentTab] = useState<number | false>(false);

  return (
    <Paper
      elevation={4}
      sx={{ padding: '1em' }}
      {...PaperProps}
      data-testid="nek-tab-box"
    >
      {!!head && (
        <Typography fontSize={20} align="center" data-testid="nek-tab-box-head">
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
            {tabs.map((tab, index) => (
              <Tab
                icon={tab.icon}
                label={tab.label}
                key={index}
                data-testid="nek-tab-box-tab"
              />
            ))}
          </Tabs>
        </Box>
        {tabs.map((tab, index) => (
          <Box role="tabpanel" hidden={currentTab !== index} key={index}>
            {currentTab === index && tab.content}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default TabBox;
