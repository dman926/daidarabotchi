import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiCardActions, { CardActionsClasses } from '@mui/material/CardActions';
import './card-actions.module.scss';

/* eslint-disable-next-line */
export interface CardActionsProps {
   children?: React.ReactNode;
   classes?: Partial<CardActionsClasses>;
   sx?: SxProps<Theme>;
   disableSpacing?: boolean;
}

export function CardActions(props: CardActionsProps) {
  return <MuiCardActions {...props}></MuiCardActions>;
}

export default CardActions;
