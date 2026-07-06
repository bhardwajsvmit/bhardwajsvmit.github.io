'use client';

import { createGlobalStyle } from 'styled-components';

const ACCENT = '#FF4D23';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #ece7da;
    color: #111110;
    -webkit-font-smoothing: antialiased;
    position: relative;
  }

  ::selection {
    background: ${ACCENT};
    color: #111110;
  }
`;

export default GlobalStyle;
