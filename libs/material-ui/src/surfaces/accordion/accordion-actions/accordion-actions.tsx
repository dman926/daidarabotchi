import MuiAccordionActions, { AccordionActionsProps as MuiAccordionActionsProps } from '@mui/material/AccordionActions';
import './accordion-actions.module.scss';

/* eslint-disable-next-line */
export interface AccordionActionsProps extends MuiAccordionActionsProps{}

export function AccordionActions(props: AccordionActionsProps) {
  return <MuiAccordionActions {...props}></MuiAccordionActions>;
}

export default AccordionActions;
