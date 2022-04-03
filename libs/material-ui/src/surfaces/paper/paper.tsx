import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { ReactChild } from 'react';
import './paper.module.scss';

/* eslint-disable-next-line */
export interface PaperProps extends MuiPaperProps {
  component?: string | ReactChild;
}

export function Paper(props: PaperProps) {
  return <MuiPaper {...props} />;
}

export default Paper;
