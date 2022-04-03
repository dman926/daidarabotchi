import { Story, Meta } from '@storybook/react';
import { Badge, BadgeProps } from './badge';
import MailIcon from '@mui/icons-material/Mail';

export default {
  component: Badge,
  title: 'Material-UI/Data Display/Badge',
} as Meta;
// basic, dot, 
const Template: Story<BadgeProps> = (args) => <Badge {...args} children={<MailIcon />}/>;

export const Basic = Template.bind({});
Basic.args = {
  color: 'primary',
  badgeContent: 4,
  variant: 'standard',
};

export const Dot = Template.bind({});
Dot.args = {
  color: 'primary',
  badgeContent: 4,
  variant: 'dot',
};
