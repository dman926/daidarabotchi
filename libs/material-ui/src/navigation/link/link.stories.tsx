import { Story, Meta } from '@storybook/react';
import { Link, LinkProps } from './link';

export default {
  component: Link,
  title: 'Material-UI/Navigation/Link',
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Link {...args}>I am a Link!</Link>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  underline: 'always',
  variant: 'inherit',
};
