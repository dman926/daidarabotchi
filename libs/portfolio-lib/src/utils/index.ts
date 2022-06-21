/* eslint-disable import/prefer-default-export */

export const notEmpty = <TValue>(
  value: TValue | null | undefined
): value is TValue => {
  if (value === null || value === undefined) return false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testDummy: TValue = value;
  return true;
};

// Shamelessly taken from https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case
export const camelToKebab = (camel: string): string =>
  camel
    .split('')
    .map((letter, idx) =>
      letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter
    )
    .join('');
