import { Paper, PaperProps } from '@daidarabotchi/material-ui';
import { Formik } from 'formik';

/* eslint-disable-next-line */
export interface ContactFormProps {
  PaperProps?: PaperProps;
}

export function ContactForm({ PaperProps = {} }: ContactFormProps) {
  return (
    <Paper
      elevation={4}
      sx={{ padding: '1em' }}
      {...PaperProps}
      data-testid="nek-contact-form"
    >
      {/*
        Use <Formik> here.
        Should take in the name, messaage,
        and a selector for best form of
        return contact (email, text, facebook) that control
        the validator for the final field to collect
        the best form of contact
      */}
    </Paper>
  );
}

export default ContactForm;
