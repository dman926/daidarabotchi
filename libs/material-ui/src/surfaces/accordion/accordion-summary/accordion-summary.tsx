import MuiAccordionSummary, { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';
import './accordion-summary.module.scss';

/* eslint-disable-next-line */
export interface AccordionSummaryProps extends MuiAccordionSummaryProps{}

export function AccordionSummary(props: AccordionSummaryProps) {
  return <MuiAccordionSummary {...props} />;
}

export default AccordionSummary;
