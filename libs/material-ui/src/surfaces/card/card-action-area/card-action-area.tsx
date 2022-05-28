import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiCardActionArea, { CardActionAreaClasses } from '@mui/material/CardActionArea';

/* eslint-disable-next-line */
export interface CardActionAreaProps {
  children?: React.ReactNode;
  classes?: Partial<CardActionAreaClasses>;
  focusVisibleClassName?: string;
  sx?: SxProps<Theme>;
}

export function CardActionArea(props: CardActionAreaProps) {
  return <MuiCardActionArea {...props} />;
}

export default CardActionArea;
