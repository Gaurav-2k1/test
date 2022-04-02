import { ThemeProvider } from "@mui/material";
import React from "react";
import { lightTheme } from "../utils/theme";

export default function ThemeWrapper(props) {
  const muiTheme = lightTheme;

  return <ThemeProvider theme={muiTheme}>{props.children}</ThemeProvider>;
}
