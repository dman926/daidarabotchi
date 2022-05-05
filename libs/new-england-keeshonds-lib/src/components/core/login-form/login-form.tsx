import {
  Box,
  Button,
  Paper,
  TextField,
  TextFieldProps,
} from '@daidarabotchi/material-ui';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  useField,
} from 'formik';
import * as Yup from 'yup';

function FormikTextField({ label, ...props }: any) {
  const [field] = useField(props);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextField label={label} inputProps={{ ...field }} {...props} />;
}

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
            <Box vertical>
              <FormikTextField name="email" label="Email" type="email" />
              <ErrorMessage name="email" />
            </Box>
            <Box vertical>
              <FormikTextField
                name="password"
                label="Password"
                type="password"
              />
              <ErrorMessage name="password" />
            </Box>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

export default LoginForm;
