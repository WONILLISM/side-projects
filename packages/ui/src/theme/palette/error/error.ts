import { red } from "../color";
import { PaletteColor } from "../palette.types";

export const light: PaletteColor = {
  main: red[700] || "",
  dark: red[800] || "",
  light: red[400] || "",
};

export const dark: PaletteColor = {
  main: red[500] || "",
  dark: red[700] || "",
  light: red[300] || "",
};
