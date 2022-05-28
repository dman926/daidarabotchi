/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { useState } from '@storybook/addons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionProps } from '../accordion';
import AccordionDetails from '../accordion-details/accordion-details';
import { AccordionSummary } from '../accordion-summary/accordion-summary';
import { Typography } from '../../../data-display/typography/typography';

export const Template: Story<AccordionProps> = (args) => {
  const [expanded, setExpanded] = useState('none');

  const handleChange = (toExpand: string) => {
    setExpanded(expanded === toExpand ? 'none' : toExpand);
  };

  return (
    <>
      <Accordion
        {...args}
        expanded={expanded === 'panel1'}
        onChange={() => handleChange('panel1')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Test Summary 1</Typography>
        </AccordionSummary>
        <AccordionDetails>Foo Bar</AccordionDetails>
      </Accordion>
      <Accordion
        {...args}
        expanded={expanded === 'panel2'}
        onChange={() => handleChange('panel2')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Test Summary 2</Typography>
        </AccordionSummary>
        <AccordionDetails>Foo Baz</AccordionDetails>
      </Accordion>
    </>
  );
};

export const LeftAlignedIconTemplate: Story<AccordionProps> = (args) => {
  const [expanded, setExpanded] = useState('none');

  const handleChange = (toExpand: string) => {
    setExpanded(expanded === toExpand ? 'none' : toExpand);
  };

  return (
    <>
      <Accordion
        {...args}
        expanded={expanded === 'panel1'}
        onChange={() => handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ flexDirection: 'row-reverse' }}
        >
          <Typography>Test Summary 1</Typography>
        </AccordionSummary>
        <AccordionDetails>Foo Bar</AccordionDetails>
      </Accordion>
      <Accordion
        {...args}
        expanded={expanded === 'panel2'}
        onChange={() => handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ flexDirection: 'row-reverse' }}
        >
          <Typography>Test Summary 2</Typography>
        </AccordionSummary>
        <AccordionDetails>Foo Baz</AccordionDetails>
      </Accordion>
    </>
  );
};

export const SubHeadingTemplate: Story<AccordionProps> = (
  args: AccordionProps
) => {
  const [expanded, setExpanded] = useState('none');

  const handleChange = (toExpand: string) => {
    setExpanded(expanded === toExpand ? 'none' : toExpand);
  };

  return (
    <div>
      <Accordion
        {...args}
        expanded={expanded === 'panel1'}
        onChange={() => handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={() => handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={() => handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={() => handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  classes: undefined,
  defaultExpanded: undefined,
  disabled: undefined,
  disableGutters: undefined,
  expanded: undefined,
  sx: { width: 600 },
};

export const LeftAlignedIcon = LeftAlignedIconTemplate.bind({});
LeftAlignedIcon.args = {
  classes: undefined,
  defaultExpanded: undefined,
  disabled: undefined,
  disableGutters: undefined,
  expanded: undefined,
  sx: { width: 600 },
};

export const WithSubHeading = SubHeadingTemplate.bind({});
WithSubHeading.args = {
  classes: undefined,
  defaultExpanded: undefined,
  disabled: undefined,
  disableGutters: undefined,
  expanded: undefined,
  sx: { width: 600 },
};
