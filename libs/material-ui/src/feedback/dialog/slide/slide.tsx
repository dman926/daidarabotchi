import MuiSlide, { SlideProps as MuiSlideProps } from '@mui/material/Slide';
import './slide.module.scss';

/* eslint-disable-next-line */
export interface SlideProps extends MuiSlideProps {}

export function Slide(props: SlideProps) {
  return <MuiSlide {...props} />;
}

export default Slide;
