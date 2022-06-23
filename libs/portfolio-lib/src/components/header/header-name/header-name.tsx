import { Typography } from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';
import { notEmpty } from '../../../utils';

export interface HeaderNameProps {
  firstName?: string;
  middleName?: string;
  prefix?: string;
  lastName?: string;
  suffix?: string;
  nickName?: string;
  subtitle?: boolean;
  jobTitle?: string | { break?: boolean; jobTitle: string };
}

export function HeaderName({
  firstName,
  middleName,
  prefix,
  lastName,
  suffix,
  nickName,
  subtitle,
  jobTitle,
}: HeaderNameProps) {
  return (
    <Typography
      variant={subtitle ? 'subtitle1' : 'h1'}
      data-testid="portfolio-header-name"
    >
      {[
        {
          field: firstName,
          itemProp: 'givenName',
          testid: 'portfolio-header-name-first-name',
        },
        {
          field: middleName,
          itemProp: 'additionalName',
          testid: 'portfolio-header-name-middle-name',
        },
        {
          field: nickName,
          itemProp: 'additionalName',
          testid: 'portfolio-header-name-nick-name',
        },
        {
          field: prefix,
          itemProp: 'honorificPrefix',
          testid: 'portfolio-header-name-prefix',
        },
        {
          field: lastName,
          itemProp: 'familyName',
          testid: 'portfolio-header-name-last-name',
        },
        {
          field: suffix,
          itemProp: 'honorificSuffix',
          testid: 'portfolio-header-name-suffix',
        },
        {
          field: typeof jobTitle === 'object' ? jobTitle.jobTitle : jobTitle,
          itemProp: 'jobTitle',
          testid: 'portfolio-header-name-job-title',
          break: typeof jobTitle === 'object' ? jobTitle.break : false,
        },
      ]
        .map<ReactNode>(
          (t) =>
            t.field && (
              <>
                {t.break && <br />}
                <span
                  key={t.field}
                  itemProp={t.itemProp}
                  data-testid={t.testid}
                >
                  {t.field}
                </span>
              </>
            )
        )
        .filter(notEmpty)
        .reduce((prev, curr) => [prev, ' ', curr], '')}
    </Typography>
  );
}

export default HeaderName;
