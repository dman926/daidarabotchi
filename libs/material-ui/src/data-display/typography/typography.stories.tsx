import { Story, Meta } from '@storybook/react';
import { Typography, TypographyProps } from './typography';

export default {
  component: Typography,
  title: 'Material-UI/Data Display/Typography',
} as Meta;

const AllTypographiesTemplate: Story<TypographyProps> = (args) =>
  <>
    <Typography {...args} variant="h1">h1. Heading</Typography>
    <br />
    <Typography {...args} variant="h2">h2. Heading</Typography>
    <br />
    <Typography {...args} variant="h3">h3. Heading</Typography>
    <br />
    <Typography {...args} variant="h4">h4. Heading</Typography>
    <br />
    <Typography {...args} variant="h5">h5. Heading</Typography>
    <br />
    <Typography {...args} variant="h6">h6. Heading</Typography>
    <br />
    <Typography {...args} variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    <br />
    <Typography {...args} variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    <br />
    <Typography {...args} variant="body1">body1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    <br />
    <Typography {...args} variant="body2">body2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    <br />
    <Typography {...args} variant="button">button Text</Typography>
    <br />
    <Typography {...args} variant="caption">caption. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    <br />
    <Typography {...args} variant="overline">overline. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
  </>

export const All = AllTypographiesTemplate.bind({});
All.args = {};
All.parameters = { controls: { exclude: ['variant', 'variantMapping'] }};

const IndividualTypographyTemplate: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Demo = IndividualTypographyTemplate.bind({});
Demo.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
