import {
  Button,
  Paper,
  PaperProps,
  TextField,
  Typography,
} from '@daidarabotchi/material-ui';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LoginProps {
  head: string;
  onSubmit: (word: string) => void;
  PaperProps?: PaperProps;
}

export function Login({ head, onSubmit, PaperProps = {} }: LoginProps) {
  const [word, setWord] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  return (
    <Paper
      elevation={4}
      sx={{ padding: '1em', display: 'flex', flexDirection: 'column' }}
      {...PaperProps}
      data-testid="nek-login"
    >
      <Typography align="center" data-testid="nek-login-head">
        {head}
      </Typography>
      <TextField
        label="Secret"
        value={word}
        onChange={(event) => {
          setWord(event.target.value);
        }}
        required
        data-testid="nek-login-secret"
      />
      {error && <Typography color="warn">Required</Typography>}
      <Button
        onClick={() => {
          if (word) {
            onSubmit(word);
          }
        }}
      >
        Submit
      </Button>
    </Paper>
  );
}

export default Login;
