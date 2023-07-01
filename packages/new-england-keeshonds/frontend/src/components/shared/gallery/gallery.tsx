import { useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import { IconButton, Typography, Box } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { Image } from '../../../interfaces/image';

/**
 *  @TODO:
 *    Change to instead take a string[][] instead of folder and images
 *    Add a layout to show each inner array as a wrap-around infinite horizontal scroll on each line
 *  */

export interface GalleryProps {
  autoScroll?: boolean;
  folders?: string[];
  images?: Image[];
  layout?: 'masonry' | 'grid';
  startingImageCount?: number;
  onFolderSelect?: (folder: string) => void;
  onImageSelect?: (image: string) => void;
}

export function Gallery({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoScroll,
  folders,
  images,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  layout = 'masonry',
  startingImageCount = 8,
  onFolderSelect,
  onImageSelect,
}: GalleryProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadedImages, setLoadedImages] = useState(startingImageCount);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  if (!images) {
    return <Typography>Loading Gallery...</Typography>;
  }

  return (
    <Masonry columns={md ? 7 : 4} spacing={4}>
      {folders?.map((folder) => (
        <Box key={folder}>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <IconButton
              onClick={() => {
                if (onFolderSelect) {
                  onFolderSelect(folder);
                }
              }}
            >
              <FolderIcon />
            </IconButton>
          </Box>
          <Typography align="center">
            {folder.substring(folder.lastIndexOf('/'))}
          </Typography>
        </Box>
      ))}
      {images.slice(0, loadedImages).map((image) => (
        <Box key={image.name}>
          <IconButton
            onClick={() => {
              if (onImageSelect) {
                onImageSelect(image.name);
              }
            }}
          >
            {image.fallback ? (
              <picture>
                <source srcSet={image.url} />
                <source srcSet={image.fallback} />
                <img
                  src={image.url}
                  loading="lazy"
                  alt={image.name}
                  style={{ maxWidth: '5em' }}
                />
              </picture>
            ) : (
              <img
                src={image.url}
                loading="lazy"
                alt={image.name}
                style={{ maxWidth: '5em' }}
              />
            )}
          </IconButton>
        </Box>
      ))}
    </Masonry>
  );
}

export default Gallery;
