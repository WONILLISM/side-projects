import { grey } from "../color/color";
import { Background } from "../palette.types";

export const light: Background = {
  default: "#ffffff",
  paper: grey[100] || "",
};

export const dark: Background = {
  default: "#121212",
  paper: grey[900] || "",
};
