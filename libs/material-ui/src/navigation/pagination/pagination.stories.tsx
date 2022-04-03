import { Story, Meta } from '@storybook/react';
import { Pagination, PaginationProps } from './pagination';

export default {
  component: Pagination,
  title: 'Material-UI/Navigation/Pagination',
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  count: 10,
  color: 'primary',
};
