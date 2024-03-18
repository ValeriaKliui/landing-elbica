import "styled-components";

import { BaseTheme } from "./components/ThemeProvider/interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
