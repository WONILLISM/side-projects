/**
 * Set font family
 */
export const setFont = (fontName: string) => {
  return `"${fontName}",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;
};

/**
 * Convert rem to px
 */
export const remToPx = (value: string): number => {
  return Math.round(parseFloat(value) * 16);
};

/**
 * Convert px to rem
 */
export const pxToRem = (value: number): string => {
  return `${value / 16}rem`;
};
