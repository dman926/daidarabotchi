import { forwardRef, DetailedHTMLProps, HTMLAttributes } from 'react';
import { styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './animated-down-scroll-circle.module.scss';

export type AnimatedDownScrollCircleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const WrapDiv = styled(
  'div',
  {}
)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
}));

export const AnimatedDownScrollCircle = forwardRef<
  HTMLDivElement,
  AnimatedDownScrollCircleProps
>((props, ref) => {
  return (
    <WrapDiv
      data-testid="nek-animated-down-scroll-circle-wrapper"
      {...props}
      ref={ref}
      className={`${props.className ? `${props.className} ` : ''}${
        styles['item-container']
      }`}
    >
      {Array.from({ length: 3 }, (_, index) => index + 1).map((iteration) => (
        <ExpandMoreIcon
          color="primary"
          className={styles['item']}
          key={`chevron-${iteration}`}
          data-testid={`chevron-${iteration}`}
        />
      ))}
    </WrapDiv>
  );
});

export default AnimatedDownScrollCircle;
