import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from '@mui/material/Container';
import './container.module.scss';

/* eslint-disable-next-line */
export interface ContainerProps extends MuiContainerProps {}

export function Container(props: ContainerProps) {
  return <MuiContainer {...props} />;
}

export default Container;
