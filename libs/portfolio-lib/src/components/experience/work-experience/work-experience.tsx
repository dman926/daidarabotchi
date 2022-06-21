import { Box } from '@daidarabotchi/material-ui';
import {
  GenericExperience,
  GenericExperienceProps,
} from '../generic-experience/generic-experience';

export function WorkExperience(props: GenericExperienceProps) {
  return (
    <Box data-testid="portfolio-work-experience">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GenericExperience {...props} />
    </Box>
  );
}

export default WorkExperience;
