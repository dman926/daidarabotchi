import { Story, Meta } from '@storybook/react';
import { Alert, AlertProps } from './alert';

export default {
  component: Alert,
  title: 'Material-UI/Feedback/Alert',
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
