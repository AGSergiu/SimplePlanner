/**
 * Return the date in ISO format, but only return the first 10 characters
 * @param {Date} date - The date to be converted.
 * @returns date as string in format (DD-mm-yyyy)
 */
export function toShortDate(date: Date | string): string {
  if (typeof date === 'string') {
    return new Date(date).toISOString().slice(0, 10)
  } else {
    return date.toISOString().slice(0, 10)
  }
}
