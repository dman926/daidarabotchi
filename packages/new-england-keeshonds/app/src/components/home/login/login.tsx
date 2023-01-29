import {
  Button,
  Paper,
  PaperProps as MuiPaperProps,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LoginProps {
  head: string;
  onSubmit: (word: string) => void;
  PaperProps?: MuiPaperProps;
}

export function Login({ head, onSubmit, PaperProps = {} }: LoginProps) {
  const [word, setWord] = useState<string>();

  return (
    <Paper
      elevation={4}
      sx={{ padding: '1em', display: 'flex', flexDirection: 'column' }}
      // eslint-disable-next-line react/jsx-props-no-spreading
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
