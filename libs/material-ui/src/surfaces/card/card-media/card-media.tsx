import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiCardMedia, { CardMediaClasses } from '@mui/material/CardMedia';

/* eslint-disable-next-line */
export interface CardMediaProps {
  children?: React.ReactNode;
  classes?: Partial<CardMediaClasses>;
  image?: string;
  src?: string;
  sx?: SxProps<Theme>;
}

export function CardMedia(props: CardMediaProps) {
  return <MuiCardMedia {...props} />;
}

export default CardMedia;
