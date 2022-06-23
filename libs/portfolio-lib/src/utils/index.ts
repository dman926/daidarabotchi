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

export const isFax = (type: string) =>
  type.toLowerCase() === 'fax' || type.toLowerCase() === 'faxnumber';

export const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return null;
};
