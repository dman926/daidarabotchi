import MuiCardMedia, {
  CardMediaProps as MuiCardMediaProps,
} from '@mui/material/CardMedia';
import { ElementType } from 'react';

export interface CardMediaProps extends MuiCardMediaProps {
  height?: string | number;
  component?: ElementType;
}

export function CardMedia(props: CardMediaProps) {
  return <MuiCardMedia {...props} />;
}

export default CardMedia;
