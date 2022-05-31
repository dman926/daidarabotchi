import { useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import { Typography } from '@daidarabotchi/material-ui';
import { useMediaQuery, useTheme } from '@mui/material';

export interface GalleryProps {
  autoScroll?: boolean;
  images?: string[];
  layout?: 'masonry' | 'grid';
  startingImageCount?: number;
  onFolderSelect?: (folder: string) => void;
}

export function Gallery({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoScroll,
  images,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  layout = 'masonry',
  startingImageCount = 8,
  onFolderSelect,
}: GalleryProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
