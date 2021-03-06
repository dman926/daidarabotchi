import { render } from '@testing-library/react';

import ImageList from './image-list';
import ImageListItem from './image-list-item/image-list-item';
import ImageListItemBar from './image-list-item-bar/image-list-item-bar';

const data = [
  'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
];

describe('ImageList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ImageList>
        {data.map((url, i) => (
          <ImageListItem key={url}>
            <img src={url} alt="" loading="lazy" />
            <ImageListItemBar title={`Image ${i}`} subtitle="I am a subtitle" />
          </ImageListItem>
        ))}
      </ImageList>
    );
    expect(baseElement).toBeTruthy();
  });
});
