import "styled-components";

import { BaseTheme } from "./components/ThemeProvider/interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

export type SVG = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;
