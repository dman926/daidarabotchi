import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps extends MuiCardProps {}

export function Card(props: CardProps) {
  return <MuiCard {...props} />;
}

export default Card;
