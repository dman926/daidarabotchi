/* eslint-disable react/jsx-props-no-spreading */

import {
  Box,
  Typography,
  Paper,
  Stack,
  Container,
  Divider,
} from '@daidarabotchi/material-ui';
import { ElementType, ReactNode, useCallback, useMemo } from 'react';
import { formatStartEndDate } from '../../../utils';
import { PrintWrap } from '../../print-wrap/print-wrap';

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
  print?: boolean;
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
  print,
}: GenericExperienceProps) {
  const cachedSubheader = useMemo(
    () =>
      `${subheader || formatStartEndDate(startDate, endDate, noPresent)}${
        location ? ` - ${location}` : ''
      }`,
    [endDate, location, noPresent, startDate, subheader]
  );
  const PrintWrapCalc = useCallback(
    // eslint-disable-next-line react/no-unused-prop-types
    ({ element, children }: { children: ReactNode; element: ElementType }) => (
      <PrintWrap element={element} print={print}>
        {children}
      </PrintWrap>
    ),
    [print]
  );

  return (
    <Box data-testid="portfolio-generic-experience">
      {compact ? (
        <PrintWrapCalc element={Paper}>
          <Container data-testid="portfolio-generic-experience-header">
            <Typography>{title}</Typography>
            <Typography>{cachedSubheader}</Typography>
          </Container>
          {!print && (
            <Container data-testid="portfolio-generic-experience-media">
              {media && <img src={media[0]} alt="" height="256" />}
            </Container>
          )}
          <Container data-testid="portfolio-generic-experience-content">
            <Typography>{content}</Typography>
          </Container>
        </PrintWrapCalc>
      ) : (
        <PrintWrapCalc
          element={Paper}
          data-testid="portfolio-generic-experience-long"
        >
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
        </PrintWrapCalc>
      )}
    </Box>
  );
}

export default GenericExperience;
