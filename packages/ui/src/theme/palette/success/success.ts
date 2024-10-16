import { green } from "../color";
import { PaletteColor } from "../palette.types";

export const light: PaletteColor = {
  main: green[800] || "",
  dark: green[900] || "",
  light: green[500] || "",
};

export const dark: PaletteColor = {
  main: green[400] || "",
  dark: green[700] || "",
  light: green[300] || "",
};
