import CirceEot from "@assets/fonts/Circe-Regular.eot";
import CirceTtf from "@assets/fonts/Circe-Regular.ttf";
import CirceWoff from "@assets/fonts/Circe-Regular.woff";
import { createGlobalStyle } from "styled-components";

import { transition } from "./shared";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: "Circe";
    src:
      url(${CirceWoff}) format("woff"),
      url(${CirceTtf}) format("ttf"),
      url(${CirceEot}) format("eot");
  }

  body,
  button,
  ::placeholder {
    font-family: "Circe", serif;
    font-style: normal;
    font-size: 20px;
    @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
      font-size: 16px;
    }
    @media ${({ theme: { deviceQueries } }) => deviceQueries.xs} {
      font-size: 14px;
    }
  }

  a {
    ${transition()};
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
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
    margin: 0 auto;
    @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
      max-width: 950px;
    }
    @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
      max-width: 720px;
    }
    @media ${({ theme: { deviceQueries } }) => deviceQueries.xs} {
      max-width: 540px;
    }
  }
  .wrapper-s {
    max-width: 1060px;
    margin-left: auto;
    margin-right: auto;
    @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
      max-width: 800px;
    }
    @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
      max-width: 700px;
    }
    @media ${({ theme: { deviceQueries } }) => deviceQueries.xs} {
      max-width: 520px;
    }
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
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
    @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
      padding: 2em 0;
    }
  }
  .section-title {
    text-align: center;
    margin-bottom: 1em;
  }
  .subtext {
    font-size: 0.8em;
  }
  .centered-text {
    text-align: center;
  }
`;
