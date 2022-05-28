/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { SnackbarContent } from '@mui/material'; // should this get wrapped into our material library?
import Button from '../../../inputs/button/button';
import Stack from '../../../layout/stack/stack';
import { SnackbarProps } from '../snackbar';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

export const MessageLengthsTemplate: Story<SnackbarProps> = () => (
  <Stack spacing={2} sx={{ maxWidth: 600 }}>
    <SnackbarContent message="I love snacks." action={action} />
    <SnackbarContent
      message={
        'I love candy. I love cookies. I love cupcakes. \
        I love cheesecake. I love chocolate.'
      }
    />
    <SnackbarContent
      message="I love candy. I love cookies. I love cupcakes."
      action={action}
    />
    <SnackbarContent
      message={
        'I love candy. I love cookies. I love cupcakes. \
        I love cheesecake. I love chocolate.'
      }
      action={action}
    />
  </Stack>
);

export default MessageLengthsTemplate;
