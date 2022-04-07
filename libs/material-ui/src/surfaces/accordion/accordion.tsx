import MuiAccordion, {
  AccordionProps as MuiAccordionProps,
} from '@mui/material/Accordion';
import './accordion.module.scss';

/* eslint-disable-next-line */
export interface AccordionProps extends MuiAccordionProps {}

export function Accordion(props: AccordionProps) {
  return <MuiAccordion {...props} />;
}

export default Accordion;