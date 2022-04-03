import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import MuiAccordionDetails, { AccordionDetailsClasses } from '@mui/material/AccordionDetails';
import './accordion-details.module.scss';

/* eslint-disable-next-line */
export interface AccordionDetailsProps {
  children?: React.ReactNode;
  classes?: Partial<AccordionDetailsClasses>;
  sx?: SxProps<Theme>;
}

export function AccordionDetails(props: AccordionDetailsProps) {
  return <MuiAccordionDetails {...props}></MuiAccordionDetails>;
}

export default AccordionDetails;
