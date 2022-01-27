/**
 * it will change to readable timer e.g. MM:SS
 * @param {number} second raw second unformatted
 * @returns number | void
 */
export function toTimeFormat(second) {
  return (second - (second %= 60)) / 60 + (second > 9 ? ":" : ":0") + second;
}
