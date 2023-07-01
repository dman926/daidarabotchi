import { Box, Button, styled, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TabBox } from './tab-box/tab-box';
import { useCallback } from 'react';

const VerticalBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

/* eslint-disable-next-line */
export interface ContactFormProps {
  head?: string;
}

export function ContactForm({ head }: ContactFormProps) {
  const handleFacebook = useCallback(() => {
    window.open('https://www.facebook.com/newenglandkeeshonds', '_blank');
  }, []);

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

                    <Button
                      type="submit"
                      variant="outlined"
                      disabled={isSubmitting}
                    >
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
          content: (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1em',
              }}
            >
              <Button variant="outlined" onClick={handleFacebook}>
                Visit the New England Keeshonds Facebook page
              </Button>
            </Box>
          ),
        },
      ]}
    />
  );
}

export default ContactForm;
