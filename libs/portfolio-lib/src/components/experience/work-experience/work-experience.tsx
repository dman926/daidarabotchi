import { Box } from '@daidarabotchi/material-ui';
import {
  GenericExperience,
  GenericExperienceProps,
} from '../generic-experience/generic-experience';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WorkExperienceProps extends GenericExperienceProps {}

export function WorkExperience(props: WorkExperienceProps) {
  return (
    <Box data-testid="portfolio-work-experience">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GenericExperience {...props} />
    </Box>
  );
}

export default WorkExperience;
