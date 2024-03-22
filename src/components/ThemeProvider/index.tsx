import { ThemeProvider } from "styled-components";

import { devices } from "@/constants";
import { colors } from "@/constants";

import { BaseTheme, ThemeProps } from "./interfaces";

const baseTheme: BaseTheme = {
  colors,
  deviceQueries: {
    lg: `(max-width: ${devices.lg}px)`,
    md: `(max-width: ${devices.md}px)`,
    sm: `(max-width: ${devices.sm}px)`,
    xs: `(max-width: ${devices.xs}px)`,
  },
};

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
);
