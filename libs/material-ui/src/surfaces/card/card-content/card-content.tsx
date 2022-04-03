import MuiCardContent, { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';
import './card-content.module.scss';

/* eslint-disable-next-line */
export interface CardContentProps extends MuiCardContentProps {}

export function CardContent(props: CardContentProps) {
  return <MuiCardContent {...props} />;
}

export default CardContent;
