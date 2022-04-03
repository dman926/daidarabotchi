import MuiSkeleton, { SkeletonProps as MuiSkeletonProps} from "@mui/material/Skeleton"
import './skeleton.module.scss';

/* eslint-disable-next-line */
export interface SkeletonProps extends MuiSkeletonProps {}

export function Skeleton(props: SkeletonProps) {
  return <MuiSkeleton />;
}

export default Skeleton;
