import { Story, Meta } from '@storybook/react';
import { Divider, DividerProps } from './divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { grey } from '@mui/material/colors';

export default {
  component: Divider,
  title: 'Material-UI/Data Display/Divider',
} as Meta;

// template for horizontal dividers
const HorizontalTemplate: Story<DividerProps> = (args) => (
  <List sx={{ width: '300px', border: `1px solid ${grey[400]}` }} component="nav" aria-label="mailbox folders">
    <ListItem button>
      <ListItemText primary="Inbox" />
    </ListItem>
    <Divider {...args} />
    <ListItem button>
      <ListItemText primary="Drafts" />
    </ListItem>
  </List>
);

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {};
Horizontal.parameters = { controls: { exclude: ['orientation',] }}

export const HorizontalInsetOrSubheader = HorizontalTemplate.bind({});
HorizontalInsetOrSubheader.args = { variant: 'inset'};
HorizontalInsetOrSubheader.parameters = { controls: { exclude: ['orientation',] }}

export const HorizontalMiddle = HorizontalTemplate.bind({});
HorizontalMiddle.args = { variant: 'middle' };
HorizontalMiddle.parameters = { controls: { exclude: ['orientation',] }}

export const HorizontalWithText = HorizontalTemplate.bind({});
HorizontalWithText.args = { textAlign: 'center', children: 'Text' };
HorizontalWithText.parameters = { controls: { exclude: ['orientation',] }}


// template for vertical divider
const VerticalTemplate: Story<DividerProps> = (args) => (
  <List sx={
    {
      border: `1px solid ${grey[400]}`,
      display: 'flex',
      alignItems: 'center',
      width: '300px',
      p: 0,
    }}
    component="nav" aria-label="mailbox folders"
  >
    <ListItem button >
      <ListItemText primary="Inbox" />
    </ListItem>
    <Divider {...args} />
    <ListItem button>
      <ListItemText primary="Drafts" />
    </ListItem>
  </List>
);

export const Vertical = VerticalTemplate.bind({});
Vertical.args = { orientation: 'vertical', flexItem: true};
Vertical.parameters = { controls: { exclude: ['orientation',] }}

export const VerticalWithMiddle = VerticalTemplate.bind({});
VerticalWithMiddle.args = { orientation: 'vertical', variant: 'middle', flexItem: true };
VerticalWithMiddle.parameters = { controls: { exclude: ['orientation',] }}

export const VerticalWithText = VerticalTemplate.bind({});
VerticalWithText.args = { orientation: 'vertical', textAlign: 'center', children: 'Text', flexItem: true };
VerticalWithText.parameters = { controls: { exclude: ['orientation',] }}
