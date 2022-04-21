import MuiSlider, { SliderProps as MuiSliderProps } from '@mui/material/Slider';
import './slider.module.scss';

/* eslint-disable-next-line */
export interface SliderProps extends MuiSliderProps {}

export function Slider(props: SliderProps) {
  return <MuiSlider data-testid="mui-slider" {...props} />;
}

export default Slider;
