import MuiAccordionActions, {
  AccordionActionsProps as MuiAccordionActionsProps,
} from '@mui/material/AccordionActions';

/* eslint-disable-next-line */
export interface AccordionActionsProps extends MuiAccordionActionsProps {}

export function AccordionActions(props: AccordionActionsProps) {
  return <MuiAccordionActions {...props} />;
}

export default AccordionActions;
