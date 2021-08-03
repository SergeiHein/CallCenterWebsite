import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import GlobalFonts from "./assets/fonts/typography";
import { Helmet } from "react-helmet";
import logo from "./assets/images/Smilax Global Logo.png";

import App from "./components/App";
// var Recaptcha = require("react-recaptcha");
ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0"
      ></meta>
      <title itemProp="name" lang="en">
        Smilax global
      </title>
      <link rel="icon" href={logo}></link>

      <meta name="description" content="Call center solutions and services" />
      <meta name="keywords" content="Call center solutions and services" />
      <meta property="og:site_name" content="Smilax global" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Smilax global" />
      <meta
        property="og:description"
        content="Call center solutions and services"
      />
      <meta property="og:url" content="" />
      <meta property="og:locale" content="en_US" />
      <link rel="canonical" href="" />
    </Helmet>
    <React.StrictMode>
      <GlobalStyles />
      <GlobalFonts />
      <App />
      {/* <Recaptcha sitekey="6Le_lMYZAAAAALg-WQtwk-J6htWEBneM84iTRkZx" />, */}
    </React.StrictMode>
  </>,
  document.getElementById("root")
  // document.getElementById("example")
);
