import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: {
      xl: "3rem",
      lg: "2.25rem",
      xm: "1.125rem",
      m: "1rem",
      sm: "0.875rem",
    },
  },
  palette: {
    txt: {
      primary: {
        medium: "#091156",
        light: "#414880",
        slight: "#d7dbff",
      },
      secondary: "#ff64ae",
      tertiary: {
        medium: "#8b8b8b",
        light: "#c5c5c5",
      },
      white: "#fff",
    },
    bg: {
      primary: "#ff64ae",
      secondary: {
        dark: "#0d165c",
        medium: "#091156",
        light: "#414880",
      },
      tertiary: "#eee",
      white: "#fff",
    },
    line: {
      primary: "#d9ddfe",
    },
    shadow: {
      primary: "#f6f7ff",
      secondary: "#e6e9fd",
      tertiary: "#ffedf6",
    },
  },
  spacing: [10, 20, 30, 40, 50, 60, 100, 120, 200],
  breakpoints: {
    values: {
      content: 1140,
      laptop: 1024,
      tablet: 768,
      mobile: 425,
    },
  },
});
