import { Story, Meta } from '@storybook/react';
import { Skeleton, SkeletonProps } from './skeleton';

export default {
  component: Skeleton,
  title: 'Material-UI/Feedback/Skeleton',
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};