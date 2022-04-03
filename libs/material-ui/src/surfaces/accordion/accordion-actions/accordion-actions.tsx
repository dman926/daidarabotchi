import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiAccordionActions, { AccordionActionsClasses } from '@mui/material/AccordionActions';
import './accordion-actions.module.scss';

/* eslint-disable-next-line */
export interface AccordionActionsProps {
  children?: React.ReactNode;
  classes?: Partial<AccordionActionsClasses>;
  disableSpacing?: boolean;
  sx?: SxProps<Theme>;
}

export function AccordionActions(props: AccordionActionsProps) {
  return <MuiAccordionActions {...props}></MuiAccordionActions>;
}

export default AccordionActions;
