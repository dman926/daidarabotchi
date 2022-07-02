/* eslint-disable react/jsx-props-no-spreading */

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Paper,
} from '@daidarabotchi/material-ui';
import { useMemo } from 'react';
import { formatStartEndDate } from '../../../utils';

export interface GenericExperienceProps {
  title: string;
  subheader?: string;
  content: string;
  media?: string[];
  startDate?: Date;
  endDate?: Date;
  noPresent?: boolean;
  location?: string;
  compact?: boolean;
}

export function GenericExperience({
  title,
  subheader,
  content,
  media,
  startDate,
  endDate,
  noPresent,
  location,
  compact,
}: GenericExperienceProps) {
  const cachedSubheader = useMemo(
    () =>
      `${subheader || formatStartEndDate(startDate, endDate, noPresent)}${
        location ? ` - ${location}` : ''
      }`,
    [endDate, location, noPresent, startDate, subheader]
  );

  return (
    <Box data-testid="portfolio-generic-experience">
      {compact ? (
        <Card data-testid="portfolio-generic-experience-compact">
          <CardHeader
            title={title}
            subheader={cachedSubheader}
            data-testid="portfolio-generic-experience-header"
          />
          {media && (
            <CardMedia
              // @TODO: convert this into a carousel
              image={media[0]}
              component="img"
              height="256"
              data-testid="portfolio-generic-experience-media"
            />
          )}
          <CardContent data-testid="portfolio-generic-experience-content">
            {content}
          </CardContent>
        </Card>
      ) : (
        <Paper data-testid="portfolio-generic-experience-long">
          <Typography data-testid="portfolio-generic-experience-header">
            {title}
          </Typography>
          <Typography data-testid="portfolio-generic-experience-subheader">
            {cachedSubheader}
          </Typography>
          {/* @TODO: carousel here */}
          <Typography data-testid="portfolio-generic-experience-content">
            {content}
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

export default GenericExperience;
