import MuiImageListItem, {
  ImageListItemProps as MuiImageListItemProps,
} from '@mui/material/ImageListItem';

/* eslint-disable-next-line */
export interface ImageListItemProps extends MuiImageListItemProps {}

export function ImageListItem(props: ImageListItemProps) {
  return <MuiImageListItem {...props} />;
}

export default ImageListItem;
