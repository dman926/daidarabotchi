import { Typography } from '@mui/material';
import { Story, Meta } from '@storybook/react';

import { Accordion, AccordionProps } from './accordion';
import AccordionDetails from './accordion-details/accordion-details';
import { AccordionSummary } from './accordion-summary/accordion-summary';

export default {
  component: Accordion,
  title: 'Material-UI/Surfaces/Accordion',
  argTypes: {
    onChange: { action: 'onChange executed!' },
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <AccordionSummary>
      <Typography>Test Summary</Typography>
    </AccordionSummary>
    <AccordionDetails>Foo Bar</AccordionDetails>
  </Accordion>
);

export const Primary = Template.bind({});
Primary.args = {
  classes: undefined,
  defaultExpanded: undefined,
  disabled: undefined,
  disableGutters: undefined,
  expanded: undefined,
  sx: undefined,
};
