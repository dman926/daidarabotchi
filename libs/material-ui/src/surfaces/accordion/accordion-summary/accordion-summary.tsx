import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiAccordionSummary, { AccordionSummaryClasses } from '@mui/material/AccordionSummary';
import './accordion-summary.module.scss';

/* eslint-disable-next-line */
export interface AccordionSummaryProps {
  children?: React.ReactNode;
  classes?: Partial<AccordionSummaryClasses>;
  expandIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function AccordionSummary(props: AccordionSummaryProps) {
  return <MuiAccordionSummary {...props}></MuiAccordionSummary>;
}

export default AccordionSummary;
