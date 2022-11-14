import { useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../utils/theme";

export default function useIsDesktop() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return isDesktop;
}
