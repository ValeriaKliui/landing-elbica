import { ThemeProvider } from "styled-components";

import { devices } from "@/constants";

import { BaseTheme, ThemeProps } from "./interfaces";

const baseTheme: BaseTheme = {
  colors: {
    primary: "#55ACA6",
    secondary: "#C1A875",
    primary_dark: "#39736f",
    primary_light: "#AAD6D3",
    yellow: "#FFFCF5",
    white: "#ffffff",
  },
  deviceQueries: {
    lg: `(max-width: ${devices.lg}px)`,
    md: `(max-width: ${devices.md}px)`,
    sm: `(max-width: ${devices.sm}px)`,
    xs: `(max-width: ${devices.xs}px)`,
  },
};

export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};
