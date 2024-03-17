import { createGlobalStyle } from "styled-components";
import CirceWoff from "@assets/fonts/Circe-Regular.woff";
import CirceEot from "@assets/fonts/Circe-Regular.eot";
import CirceTtf from "@assets/fonts/Circe-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Circe";
    src:
      url(${CirceWoff}) format("woff"),
      url(${CirceTtf}) format("ttf"),
      url(${CirceEot}) format("eot");
  }

  body,
  a, button {
    font-family: "Circe", serif;
    font-style: normal;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6 ,
  p {
    margin: 0;
  }

  .link {
    color: #55aca6;
    font-weight: 700;
  }

  .bold {
    font-weight: 700;
  }

  #root {
    max-width: 1300px;
    margin: 0 auto;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Cormorant", serif;
    font-style: normal;
  }
  h2 {
    text-transform: uppercase;
font-size: 2.5em;
  }
  h4 {
    font-size: 1.5em;
  }
  .centered-text {
    text-align:center
  }
`;
