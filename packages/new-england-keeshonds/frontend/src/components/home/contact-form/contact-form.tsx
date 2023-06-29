import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TabBox } from './tab-box/tab-box';

const VerticalBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

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
                // eslint-disable-next-line @typescript-eslint/no-empty-function
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
                    <VerticalBox>
                      <Field name="name" component={TextField} label="Name" />
                      <ErrorMessage name="name" />
                    </VerticalBox>

                    <VerticalBox>
                      <Field
                        name="message"
                        component={TextField}
                        label="Message"
                        rows={4}
                      />
                      <ErrorMessage name="message" />
                    </VerticalBox>

                    <VerticalBox>
                      <Field
                        name="email"
                        component={TextField}
                        label="Email"
                        type="email"
                      />
                      <ErrorMessage name="email" />
                    </VerticalBox>

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
          // @TODO: Connect to "Newenglandkeeshonds Baxter" facebook page
          key: 1,
          icon: <FacebookIcon />,
          content: <Typography>TODO</Typography>,
        },
      ]}
    />
  );
}

export default ContactForm;
