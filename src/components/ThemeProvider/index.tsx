import { ThemeProvider } from "styled-components";

import { BaseTheme, ThemeProps } from "./interfaces";

const themeLight: BaseTheme = {
  colors: {
    primary: "#55ACA6",
    secondary: "#C1A875",
    primary_light: "#AAD6D3",
    yellow: "#FFFCF5",
    white: "#ffffff",
  },
};

export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={themeLight}>{children}</ThemeProvider>;
};
