import { createGlobalStyle } from "styled-components";
import "react-tooltip/dist/react-tooltip.css";

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Gilroy';
      src: url('../assets/fonts/Gilroy-Regular.ttf') format('ttf');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Gilroy';
      src: url('../assets/fonts/Gilroy-Medium.ttf') format('ttf');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Gilroy';
      src: url('../assets/fonts/Gilroy-Bold.ttf') format('ttf');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Gilroy';
      src: url('../assets/fonts/Gilroy-ExtraBold.ttf') format('ttf');
      font-weight: 800;
      font-style: normal;
      font-display: swap;
    }


  html{
    font-size:10px;
  }
  
  * {
      box-sizing: border-box;
      margin: 0;
    }


  body {
    font-family: 'Gilroy';
    font-size: 1.6rem;
    line-height: 1.6;
      font-smooth: antialiased;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .tooltip{
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  }
`;

export default GlobalStyle;
