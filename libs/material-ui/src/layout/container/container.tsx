import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from '@mui/material/Container';

/* eslint-disable-next-line */
export interface ContainerProps extends MuiContainerProps {}

export function Container(props: ContainerProps) {
  return <MuiContainer data-testid="mui-container" {...props} />;
}

export default Container;
