import { Box } from '@daidarabotchi/material-ui';
import {
  GenericExperience,
  GenericExperienceProps,
} from '../generic-experience/generic-experience';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectExperienceProps extends GenericExperienceProps {}

export function ProjectExperience(props: ProjectExperienceProps) {
  return (
    <Box data-testid="portfolio-project-experience">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GenericExperience {...props} />
    </Box>
  );
}

export default ProjectExperience;
