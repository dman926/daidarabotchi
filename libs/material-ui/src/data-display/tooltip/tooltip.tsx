import MuiTooltip, {
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';

/* eslint-disable-next-line */
export interface TooltipProps extends MuiTooltipProps {}

export function Tooltip(props: TooltipProps) {
  return <MuiTooltip data-testid="mui-tooltip" {...props} />;
}

export default Tooltip;
