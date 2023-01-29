import { Box, Button, Paper, styled, TextField } from '@mui/material';
import { ErrorMessage, Form, Formik, FormikHelpers, useField } from 'formik';
import * as Yup from 'yup';

// @TODO: figure out the proper type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FormikTextField({ label, ...props }: any) {
  const [field] = useField(props);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextField label={label} inputProps={{ ...field }} {...props} />;
}

const VerticalBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export interface LoginFormProps {
  onSubmit: (
    values: { email: string; password: string },
    formikHelpers: FormikHelpers<{ email: string; password: string }>
  ) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <Paper>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid Email Address')
            .required('Email is Required'),
          password: Yup.string().required('Password is Required'),
        })}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <VerticalBox sx={{ gap: '0.5em' }}>
              <VerticalBox>
                <FormikTextField name="email" label="Email" type="email" />
                <ErrorMessage name="email" />
              </VerticalBox>
              <VerticalBox>
                <FormikTextField
                  name="password"
                  label="Password"
                  type="password"
                />
                <ErrorMessage name="password" />
              </VerticalBox>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting || !isValid}
              >
                Submit
              </Button>
            </VerticalBox>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

export default LoginForm;
