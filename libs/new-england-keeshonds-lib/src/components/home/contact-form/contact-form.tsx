import { Box, Button, TextField, Typography } from '@daidarabotchi/material-ui';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TabBox } from './tab-box/tab-box';

/* eslint-disable-next-line */
export interface ContactFormProps {
  head?: string;
}

export function ContactForm({ head }: ContactFormProps) {
  return (
    <TabBox
      head={head}
      tabs={[
        {
          key: 0,
          icon: <EmailIcon />,
          content: (
            <Box sx={{ marginTop: '1em' }}>
              <Formik
                initialValues={{
                  name: '',
                  message: '',
                  email: '',
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required('Required'),
                  message: Yup.string().required('Required'),
                  email: Yup.string()
                    .email('Invalid Email Address')
                    .required('Required'),
                })}
                onSubmit={() => {}}
              >
                {({ isSubmitting }) => (
                  <Form
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5em',
                    }}
                  >
                    <Box vertical>
                      <Field name="name" component={TextField} label="Name" />
                      <ErrorMessage name="name" />
                    </Box>

                    <Box vertical>
                      <Field
                        name="message"
                        component={TextField}
                        label="Message"
                        rows={4}
                      />
                      <ErrorMessage name="message" />
                    </Box>

                    <Box vertical>
                      <Field
                        name="email"
                        component={TextField}
                        label="Email"
                        type="email"
                      />
                      <ErrorMessage name="email" />
                    </Box>

                    <Button type="submit" disabled={isSubmitting}>
                      Send
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          ),
        },
        {
          key: 1,
          icon: <FacebookIcon />,
          content: <Typography>TODO</Typography>,
        },
      ]}
    />
  );
}

export default ContactForm;
