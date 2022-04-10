import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
