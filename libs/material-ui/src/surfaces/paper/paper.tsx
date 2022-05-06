import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { ReactChild } from 'react';

/* eslint-disable-next-line */
export interface PaperProps extends MuiPaperProps {
  component?: string | ReactChild;
}

export function Paper(props: PaperProps) {
  return <MuiPaper data-testid="mui-paper" {...props} />;
}

export default Paper;
