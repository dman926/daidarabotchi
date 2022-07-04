import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { forwardRef, JSXElementConstructor, ReactElement } from 'react';

/* eslint-disable-next-line */
export interface PaperProps extends MuiPaperProps {
  component?:
    | string
    | (
        | string
        | number
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        | ReactElement<any, string | JSXElementConstructor<any>>
      );
}

export const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => (
  <MuiPaper data-testid="mui-paper" ref={ref} {...props} />
));

export default Paper;
