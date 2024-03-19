import CirceEot from "@assets/fonts/Circe-Regular.eot";
import CirceTtf from "@assets/fonts/Circe-Regular.ttf";
import CirceWoff from "@assets/fonts/Circe-Regular.woff";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Circe";
    src:
      url(${CirceWoff}) format("woff"),
      url(${CirceTtf}) format("ttf"),
      url(${CirceEot}) format("eot");
  }

  body,
  button, ::placeholder {
    font-family: "Circe", serif;
    font-style: normal;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  li {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6 ,
  p {
    margin: 0;
  }

  .link {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
   }

  .bold {
    font-weight: 700;
  }

  #root {
    margin: 0 auto;
  }
  .wrapper {
    max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  }
  .wrapper-s {
    max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  }
  h2, h3, h4, h5, h6 {
    font-family: "Cormorant", serif;
    font-style: normal;
  }
  h2 {
    text-transform: uppercase;
font-size: 2.5em;
  }
  h3 {
    font-size: 2em;
  }
  h4 {
    font-size: 1.5em;
  }
  .section {
    padding: 3em 0;
    margin-bottom: 1em;
  }
  .section-title {
    text-align:center;
    margin-bottom: 1em;
  }
  .subtext {
    font-size: .8em;
  }
`;
