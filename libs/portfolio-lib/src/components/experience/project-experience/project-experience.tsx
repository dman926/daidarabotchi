import { Box } from '@daidarabotchi/material-ui';
import {
  GenericExperience,
  GenericExperienceProps,
} from '../generic-experience/generic-experience';

export function ProjectExperience(props: GenericExperienceProps) {
  return (
    <Box data-testid="portfolio-project-experience">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GenericExperience {...props} />
    </Box>
  );
}

export default ProjectExperience;
