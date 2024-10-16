import { PaletteColor } from "../palette.types";
import { orange } from "../color";

export const light: PaletteColor = {
  main: orange[800] || "",
  dark: orange[900] || "",
  light: orange[500] || "",
};

export const dark: PaletteColor = {
  main: orange[400] || "",
  dark: orange[700] || "",
  light: orange[300] || "",
};
