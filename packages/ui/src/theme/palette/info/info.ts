import { lightblue } from "../color/color";
import { PaletteColor } from "../palette.types";

export const light: PaletteColor = {
  main: lightblue[700] || "",
  dark: lightblue[900] || "",
  light: lightblue[500] || "",
};

export const dark: PaletteColor = {
  main: lightblue[400] || "",
  dark: lightblue[700] || "",
  light: lightblue[300] || "",
};
