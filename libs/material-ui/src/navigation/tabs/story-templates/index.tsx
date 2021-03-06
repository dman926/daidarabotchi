/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { useState } from '@storybook/addons';
import { ReactNode, SyntheticEvent } from 'react';
import { Typography } from '../../../data-display/typography/typography';
import { Box } from '../../../layout/box/box';
import { Tab } from '../tab/tab';
import { Tabs, TabsProps } from '../tabs';

function TabPanel(props: {
  children: ReactNode;
  value: number;
  index: number;
}) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

export const Template: Story<TabsProps> = (args: TabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          {...args}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default Template;
