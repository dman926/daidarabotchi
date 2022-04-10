import { Story, Meta } from '@storybook/react';
import { ImageList, ImageListProps } from './image-list';
import ImageListItem from './image-list-item/image-list-item';
import ImageListItemBar from './image-list-item-bar/image-list-item-bar';

import Lab1 from '../../assets/images/stock images/chokniti.jpg';
import Lab2 from '../../assets/images/stock images/polina-tankilevitch.jpg';
import Lab3 from '../../assets/images/stock images/pixabay.jpg';
import Lab4 from '../../assets/images/stock images/martin-lopez.jpg';

const data = [Lab1, Lab2, Lab3, Lab4];

export default {
  component: ImageList,
  title: 'Material-UI/Layout/ImageList',
} as Meta;

const Template: Story<ImageListProps> = (args) => (
  <ImageList {...args}>
    {data.map((image, i) => (
      <ImageListItem key={i}>
        <img src={image} alt="" loading="lazy" />
        <ImageListItemBar title={`Image ${i}`} subtitle="I am a subtitle" />
      </ImageListItem>
    ))}
  </ImageList>
);

export const Primary = Template.bind({});
Primary.args = {};
