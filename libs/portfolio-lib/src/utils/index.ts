/* eslint-disable import/prefer-default-export */

export const notEmpty = <TValue>(
  value: TValue | null | undefined
): value is TValue => {
  if (value === null || value === undefined) return false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testDummy: TValue = value;
  return true;
};

// Shamelessly adapted from https://stackoverflow.com/questions/43768435/all-text-from-camelcase-to-snake-case
export const camelToKebab = (camel: string): string =>
  camel
    .replace(
      /(\b[a-z]+|G(?!^))((?:[A-Z]|\d+)[a-z]*)/,
      (match, p1, p2) => `${p1}-${p2}`
    )
    .toLowerCase();
