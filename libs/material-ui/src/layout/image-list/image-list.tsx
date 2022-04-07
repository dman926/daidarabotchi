import MuiImageList, {
  ImageListProps as MuiImageListProps,
} from '@mui/material/ImageList';
import './image-list.module.scss';

/* eslint-disable-next-line */
export interface ImageListProps extends MuiImageListProps {}

export function ImageList(props: ImageListProps) {
  return <MuiImageList {...props} />;
}

export default ImageList;