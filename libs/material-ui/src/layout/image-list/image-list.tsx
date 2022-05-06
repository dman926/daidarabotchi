import MuiImageList, {
  ImageListProps as MuiImageListProps,
} from '@mui/material/ImageList';

/* eslint-disable-next-line */
export interface ImageListProps extends MuiImageListProps {}

export function ImageList(props: ImageListProps) {
  return <MuiImageList data-testid="mui-image-list" {...props} />;
}

export default ImageList;
