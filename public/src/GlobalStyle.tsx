import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family:'Poppins';
    background-color: white;
    color: black;
  }
    @media (prefers-color-scheme: dark) {
    body {
      background-color: white !important;
      color: black !important;
    }
  }
`;

export default GlobalStyle;
