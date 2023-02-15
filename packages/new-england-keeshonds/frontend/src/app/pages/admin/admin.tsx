import { Button, Typography } from '@mui/material';
import { useFirebase } from 'firebase-react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect, useMemo, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Images from './components/images';
import { LoginForm } from '../../../components/core/login-form/login-form';
import { Page } from '../../../components/pages/page/page';

interface AdminState {
  admin: boolean;
}

export function Admin() {
  const [adminState, setAdminState] = useState<AdminState | undefined>(
    undefined
  );
  const firebase = useFirebase();
  const firebaseAuth = useMemo(() => firebase.auth, [firebase]);
  const [user, loading, error] = useAuthState(firebaseAuth);
  const navigate = useNavigate();

  useEffect(() => {
    user
      ?.getIdTokenResult()
      .then((idTokenRes) => {
        setAdminState({ admin: Boolean(idTokenRes.claims['admin']) });
      })
      .catch((err) => {
        // @TODO: handle this
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, [user]);

  if (loading) {
    return (
      <Page testid="admin-wrapper">
        <Typography>Loading...</Typography>
      </Page>
    );
  }
  if (error) {
    return (
      <Page testid="admin-wrapper">
        <Typography>Error: {error.message}</Typography>
      </Page>
    );
  }
  if (!user) {
    return (
      <Page testid="admin-wrapper">
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

  if (!adminState) {
    return (
      <Page testid="admin-wrapper">
        <Typography>Validating...</Typography>
      </Page>
    );
  }

  if (!adminState.admin) {
    navigate('/');
  }

  return (
    <Page testid="admin-wrapper">
      <Images />
      <Button
        onClick={() => {
          signOut(firebaseAuth);
        }}
        variant="contained"
        sx={{ marginTop: 3 }}
      >
        Sign Out
      </Button>
    </Page>
  );
}

export default Admin;
