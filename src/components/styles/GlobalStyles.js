import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
  }

html {
  font-size: 16px;
  --primary-blue-color: #6385FB;
  --primary-purple-color: #6C63FF;
  --primary-orange-color: #DD933C;
  --body-bg-color: #fdfdfd;
  --text-color: #353535;
  --light-text-color: #5a5a5a;
  --btn-cta-color: #FFC83C;
  --title-font: "Raleway", sans-serif;
  --content-font: "Work Sans", sans-serif;
  --email-subscription-font: "Source Code Pro", sans-serif;
  --section-between-margin: 90px;
  --section-bottom-margin: 65px;
  --normal-box-shadow: 0px 0px 7px rgba(0,0,0,0.25);
  --light-box-shadow: 0px 0px 5px rgba(0,0,0,0.25);

}

body {
  background: var(--body-bg-color);

  &.fixed-for-mobile-nav {
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.45;
      z-index: 8;
    }
  }
}

@media (max-width: 1100px) {
  html {
    --section-between-margin: 70px;
  --section-bottom-margin: 50px;
  }
}

@media (max-width: 768px) {
  html {
  --section-bottom-margin: 60px;
  }
}

@media (max-width: 900px) {
  #root {
    overflow-x: hidden;
    position: relative;
  }
}

@media (max-width: 480px) {
  html {
    --section-between-margin: 50px;
  --section-bottom-margin: 50px;
  }
}

@media (max-width: 375px) {
  html {
    --section-between-margin: 50px;
  --section-bottom-margin: 50px;
  }
}


`;

export default GlobalStyles;
