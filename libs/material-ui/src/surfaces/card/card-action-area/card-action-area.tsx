import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiCardActionArea, { CardActionAreaClasses } from '@mui/material/CardActionArea';
import './card-action-area.module.scss';

/* eslint-disable-next-line */
export interface CardActionAreaProps {
  children?: React.ReactNode;
  classes?: Partial<CardActionAreaClasses>;
  focusVisibleClassName?: string;
  sx?: SxProps<Theme>;
}

export function CardActionArea(props: CardActionAreaProps) {
  return <MuiCardActionArea {...props}></MuiCardActionArea>;
}

export default CardActionArea;
