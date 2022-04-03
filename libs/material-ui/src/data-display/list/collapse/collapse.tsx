import MuiCollapse, {
  CollapseProps as MuiCollapseProps,
} from '@mui/material/Collapse';
import './collapse.module.scss';

/* eslint-disable-next-line */
export interface CollapseProps extends MuiCollapseProps {}

export function Collapse(props: CollapseProps) {
  return <MuiCollapse {...props} />;
}

export default Collapse;
