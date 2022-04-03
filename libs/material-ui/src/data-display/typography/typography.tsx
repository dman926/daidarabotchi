import MuiTypography, { TypographyProps as MuiTypographyProps} from '@mui/material/Typography';
import { ElementType } from 'react';
import './typography.module.scss';

/* eslint-disable-next-line */
export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
}

export function Typography(props: TypographyProps) {
  return <MuiTypography {...props} />;
}

export default Typography;
