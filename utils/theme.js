import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: "Inter, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "contained",
        disableElevation: true,
        color: "primary",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "6px 20px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 30,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#e5e7eb",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  ...theme,
  palette: {
    mode: "light",
    primary: { main: "#02C39A" },
    secondary: { main: "#313189" },
    yellow: { main: "#FFDE4F" },
  },
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: { main: "#f5f5f5" }, // neutral[100]
    secondary: { main: "#2dd4bf" }, // teal[400]
  },
});
