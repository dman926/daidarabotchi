import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';
import './chip.module.scss';

/* eslint-disable-next-line */
export interface ChipProps extends MuiChipProps {}

export function Chip(props: ChipProps) {
  return <MuiChip data-testid="mui-chip" {...props} />;
}

export default Chip;
