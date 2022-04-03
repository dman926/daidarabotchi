import MuiRating, { RatingProps as MuiRatingProps} from "@mui/material/Rating"
import './rating.module.scss';

/* eslint-disable-next-line */
export interface RatingProps extends MuiRatingProps {}

export function Rating(props: RatingProps) {
  return <MuiRating />;
}

export default Rating;
