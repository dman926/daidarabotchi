import MuiAccordionDetails, {
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from '@mui/material/AccordionDetails';

/* eslint-disable-next-line */
export interface AccordionDetailsProps extends MuiAccordionDetailsProps {}

export function AccordionDetails(props: AccordionDetailsProps) {
  return <MuiAccordionDetails {...props} />;
}

export default AccordionDetails;
