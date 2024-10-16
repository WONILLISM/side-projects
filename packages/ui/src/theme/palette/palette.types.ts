export interface PaletteColor {
  main: string;
  dark: string;
  light: string;
  contrast?: string;
  hover?: string;
  selected?: string;
  focus?: string;
  focusVisible?: string;
  outlinedBorder?: string;
}

export interface Color {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  a700?: string;
  a400?: string;
  a200?: string;
  a100?: string;
}

export interface Background {
  default: string;
  paper: string;
}

export interface Text {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface Action {
  active: string;
  hover: string;
  selected: string;
  focus: string;
  disabled: string;
}

export interface Common {
  white: string;
  black: string;
}
