// Optional complexity limitation; feel free to modify this to make the puzzle easier/harder
/* eslint complexity: ["error", 10] */

type TimeInputString =`${number}${number}:${number}${number}`;

/**
 *
 * @param time - Input type in format HH:MM e.g. 12:55.
 * @returns Input time as a ”spoken’ string e.g. It’s twelve fifty five pm.
 */
const talkingClock = (time: TimeInputString): string => {
  /**
   * Your code here.
   */

  return `It’s ${time}`;
}

export default talkingClock;
