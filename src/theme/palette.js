import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#e8f7f4",
  200: "#d1efe9",
  300: "#bae8de",
  400: "#a3e0d4",
  500: "#8cd9c9",
  600: "#75d1be",
  700: "#5ec9b4",
  800: "#47c2a9",
  900: "#30ba9e",
  1000: "#1ab394",
};

const PRIMARY = {
  lighter: "#f4f4f4",
  light: "#FDAB76",
  main: "#1ab394",
  dark: "#f4f4f4",
  darker: "#770508",
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#E6DBFE",
  light: "#B195FE",
  main: "#754FFE",
  dark: "#4027B6",
  darker: "#1C0F79",
  contrastText: "#FFFFFF",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#FFFFFF",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[100], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(mode) {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[1000],
      secondary: GREY[900],
      disabled: GREY[500],
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: GREY[800],
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[900], 0.12),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return mode === "light" ? light : dark;
}
