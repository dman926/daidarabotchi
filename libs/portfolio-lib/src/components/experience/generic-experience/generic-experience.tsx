/* eslint-disable react/jsx-props-no-spreading */

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardHeaderProps,
  CardMediaProps,
} from '@daidarabotchi/material-ui';

export interface GenericExperienceProps {
  short?: {
    header: {
      headerProps: CardHeaderProps;
      testid?: string;
    };
    media?: {
      mediaProps: CardMediaProps;
      testid?: string;
    };
    content?: {
      contentBody: JSX.Element | string;
      testid?: string;
    };
  };
}

export function GenericExperience({ short }: GenericExperienceProps) {
  const { header, media, content } = short || {};
  const { headerProps, testid: headerTestId } = header || {};
  const { mediaProps, testid: mediaTestId } = media || {
    mediaProps: undefined,
  };
  const { contentBody, testid: contentTestId } = content || {
    contentBody: undefined,
  };
  return (
    <Box data-testid="portfolio-generic-experience">
      {short && (
        <Card data-testid="portfolio-generic-experience-short">
          <CardHeader {...headerProps} data-testid={headerTestId} />
          {mediaProps && (
            <CardMedia {...mediaProps} data-testid={mediaTestId} />
          )}
          {contentBody && (
            <CardContent data-testid={contentTestId}>{contentBody}</CardContent>
          )}
        </Card>
      )}
    </Box>
  );
}

export default GenericExperience;
