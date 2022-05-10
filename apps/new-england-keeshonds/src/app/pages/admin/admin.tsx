import { Box, Button, Typography } from '@daidarabotchi/material-ui';
import {
  useFirebase,
  LoginForm,
  Page,
} from '@daidarabotchi/new-england-keeshonds-lib';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Admin() {
  const firebaseAuth = useFirebase().firebase.auth;
  const [user, loading, error] = useAuthState(firebaseAuth);

  if (loading) {
    return (
      <Page testid="admin-loading-wrapper">
        <Typography>Loading...</Typography>
      </Page>
    );
  }
  if (error) {
    return (
      <Page testid="admin-error-wrapper">
        <Typography>Error: {error.message}</Typography>
      </Page>
    );
  }
  if (!user) {
    return (
      <Page testid="admin-login-wrapper">
        <LoginForm
          onSubmit={(values, { setSubmitting }) => {
            signInWithEmailAndPassword(
              firebaseAuth,
              values.email,
              values.password
            ).finally(() => {
              setSubmitting(false);
            });
          }}
        />
      </Page>
    );
  }

  return (
    <Page testid="admin-wrapper">
      <Button
        onClick={() => {
          signOut(firebaseAuth);
        }}
        variant="contained"
      >
        Sign Out
      </Button>
    </Page>
  );
}

export default Admin;
