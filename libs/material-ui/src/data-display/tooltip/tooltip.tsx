import MuiTooltip, {
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';
import './tooltip.module.scss';

/* eslint-disable-next-line */
export interface TooltipProps extends MuiTooltipProps {}

export function Tooltip(props: TooltipProps) {
  return <MuiTooltip {...props} />;
}

export default Tooltip;
