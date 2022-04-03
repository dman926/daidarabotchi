import MuiImageListItemBar, {
  ImageListItemBarProps as MuiImageListItemBarProps,
} from '@mui/material/ImageListItemBar';
import './image-list-item-bar.module.scss';

/* eslint-disable-next-line */
export interface ImageListItemBarProps extends MuiImageListItemBarProps {}

export function ImageListItemBar(props: ImageListItemBarProps) {
  return <MuiImageListItemBar {...props} />;
}

export default ImageListItemBar;
