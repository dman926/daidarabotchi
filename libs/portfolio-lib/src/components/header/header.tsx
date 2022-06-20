import { Box, Typography } from '@daidarabotchi/material-ui';
import { ReactNode } from 'react';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  if (value === null || value === undefined) return false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testDummy: TValue = value;
  return true;
}

export interface HeaderProps {
  name?: {
    firstName?: string;
    middleName?: string;
    prefix?: string;
    lastName?: string;
    suffix?: string;
    nickName?: string;
  };
}

export function Header({
  name: { firstName, middleName, prefix, lastName, suffix, nickName } = {},
}: HeaderProps) {
  return (
    <Box data-testid="portfolio-header">
      <Typography
        itemScope
        itemType="https://schema.org/Person"
        data-testid="portfolio-header-person"
      >
        {[
          {
            field: firstName,
            itemProp: 'givenName',
            testid: 'portfolio-header-first-name',
          },
          {
            field: middleName,
            itemProp: 'additionalName',
            testid: 'portfolio-header-middle-name',
          },
          {
            field: nickName,
            itemProp: 'additionalName',
            testid: 'portfolio-header-nick-name',
          },
          {
            field: prefix,
            itemProp: 'honorificPrefix',
            testid: 'portfolio-header-prefix',
          },
          {
            field: lastName,
            itemProp: 'familyName',
            testid: 'portfolio-header-last-name',
          },
          {
            field: suffix,
            itemProp: 'honorificSuffix',
            testid: 'portfolio-header-suffix',
          },
        ]
          .map<ReactNode>(
            (t) =>
              t.field && (
                <span itemProp={t.itemProp} data-testid={t.testid}>
                  {t.field}
                </span>
              )
          )
          .filter(notEmpty)
          .reduce((prev, curr) => [prev, ' ', curr], '')}
      </Typography>
    </Box>
  );
}

export default Header;
