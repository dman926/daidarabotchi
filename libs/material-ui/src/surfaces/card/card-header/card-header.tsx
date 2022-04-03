import MuiCardHeader, { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import './card-header.module.scss';

/* eslint-disable-next-line */
export interface CardHeaderProps extends MuiCardHeaderProps {};

export function CardHeader(props: CardHeaderProps) {
  return <MuiCardHeader {...props} />;
}

export default CardHeader;
