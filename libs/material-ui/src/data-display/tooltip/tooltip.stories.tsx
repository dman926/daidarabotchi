import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from './tooltip';

export default {
  component: Tooltip,
  title: 'Material-UI/Data Display/Tooltip',
  argTypes: {
    placement: {
      options: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <span style={{fontSize: '2rem'}}>Hover Over Me!</span>
  </Tooltip>
);

export const Primary = Template.bind({});
Primary.args = {
  arrow: true,
  title: 'I Am A Tooltip!',
  placement: 'bottom',
};
