import { Box, Button, TextField, Typography } from '@daidarabotchi/material-ui';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ReactNode } from 'react';
import * as Yup from 'yup';
import TabBox from './tab-box/tab-box';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

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
                {(formik) => (
                  <Form
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5em',
                    }}
                  >
                    <Box vertical>
                      <Field
                        name="name"
                        component={(props: any) => (
                          <TextField label="Name" {...props} />
                        )}
                      />
                      <ErrorMessage name="name" />
                    </Box>

                    <Box vertical>
                      <Field
                        name="message"
                        component={(props: any) => (
                          <TextField label="Message" rows={4} {...props} />
                        )}
                      />
                      <ErrorMessage name="message" />
                    </Box>

                    <Box vertical>
                      <Field
                        name="email"
                        component={(props: any) => (
                          <TextField label="Your Email" {...props} />
                        )}
                      />
                      <ErrorMessage name="email" />
                    </Box>

                    <Button type="submit">Send</Button>
                  </Form>
                )}
              </Formik>
            </Box>
          ),
        },
        {
          icon: <FacebookIcon />,
          content: <Typography>TODO</Typography>,
        },
      ]}
    />
  );
}

export default ContactForm;
