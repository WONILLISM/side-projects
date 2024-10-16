import { blue, yellow } from "../color";
import { PaletteColor } from "../palette.types";

export const light: PaletteColor = {
  main: blue[500] || "",
  dark: blue[600] || "",
  light: blue[400] || "",
  contrast: yellow[50],
};

export const dark: PaletteColor = {
  main: blue[200] || "",
  dark: blue[400] || "",
  light: blue[50] || "",
  contrast: yellow[900],
};
