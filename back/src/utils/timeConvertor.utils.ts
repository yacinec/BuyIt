/**
 * Returns hours in seconds in integer format.
 * @param hours {string}
 * @returns {number}
 */
export const convertToSeconds = (hours: string): number => {
  return 60 * 60 * parseInt(hours.split("")[0]);
};
