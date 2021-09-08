import { css, Theme } from "@emotion/react";

export const DdefaultTheme: Theme = {
  palette: {
    primary: "#5851ea",
    secondary: "#fff",
  },
};

export const GlobalStyles = css`
  @font-face {
    font-family: "Open Sans";
    src: url(https://fonts.googleapis.com/css2?family=Open+Sans) format("ttf");
  }
  @font-face {
    font-family: "Poppins";
    src: url(https://fonts.googleapis.com/css2?family=Poppins) format("ttf");
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;

    * {
      font-family: "Open Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  body #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  :is(h1, h2, h3, h4, h5, h6) {
    font-family: "Poppins", sans-serif;
  }
`;
