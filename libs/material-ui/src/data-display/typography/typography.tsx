import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import { ElementType } from 'react';

/* eslint-disable-next-line */
export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
}

export function Typography(props: TypographyProps) {
  return <MuiTypography data-testid="mui-typography" {...props} />;
}

export default Typography;
