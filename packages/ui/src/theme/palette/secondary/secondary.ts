import { purple } from "../color";
import { PaletteColor } from "../palette.types";

export const light: PaletteColor = {
  main: purple[500] || "",
  dark: purple[700] || "",
  light: purple[300] || "",
};

export const dark: PaletteColor = {
  main: purple[200] || "",
  dark: purple[400] || "",
  light: purple[50] || "",
};
