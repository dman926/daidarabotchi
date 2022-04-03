import { Story, Meta } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './button-group';
import { Button } from '../button/button';

export default {
  component: ButtonGroup,
  title: 'Material-UI/Inputs/ButtonGroup',
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args}>
  <Button children="Button 1" />
  <Button children="Button 2" />
  <Button children="Button 3" />
</ButtonGroup>;

export const HorizontalGroup = Template.bind({});
HorizontalGroup.args = {
  orientation: 'horizontal',
};

export const VerticalGroup = Template.bind({});
VerticalGroup.args = {
  orientation: 'vertical',
};
