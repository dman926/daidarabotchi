import MuiImageListItemBar, {
  ImageListItemBarProps as MuiImageListItemBarProps,
} from '@mui/material/ImageListItemBar';

/* eslint-disable-next-line */
export interface ImageListItemBarProps extends MuiImageListItemBarProps {}

export function ImageListItemBar(props: ImageListItemBarProps) {
  return <MuiImageListItemBar {...props} />;
}

export default ImageListItemBar;
