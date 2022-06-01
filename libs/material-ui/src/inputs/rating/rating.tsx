import MuiRating, { RatingProps as MuiRatingProps } from '@mui/material/Rating';

/* eslint-disable-next-line */
export interface RatingProps extends MuiRatingProps {}

export function Rating(props: RatingProps) {
  return <MuiRating data-testid="mui-rating" {...props} />;
}

export default Rating;
