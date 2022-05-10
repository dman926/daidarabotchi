import { useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import { Typography } from '@daidarabotchi/material-ui';
import { useMediaQuery, useTheme } from '@mui/material';

export interface GalleryProps {
  autoScroll?: boolean;
  images?: string[];
  layout?: 'masonry' | 'grid';
  startingImageCount?: number;
}

export function Gallery({
  autoScroll,
  images,
  layout = 'masonry',
  startingImageCount = 8,
}: GalleryProps) {
  const [loadedImages, setLoadedImages] = useState(startingImageCount);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  if (!images) {
    return <Typography>Loading Gallery...</Typography>;
  }

  return (
    <Masonry columns={md ? 7 : 4} spacing={2}>
      {images.slice(0, loadedImages).map((image) => (
        <img src={image} loading="lazy" alt={image} key={image} />
      ))}
    </Masonry>
  );
}

export default Gallery;
