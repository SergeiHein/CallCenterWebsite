import { createGlobalStyle } from "styled-components";
import RalewayRegularWoff from "./Raleway-Regular.woff";
import RalewayRegularWoff2 from "./Raleway-Regular.woff2";
import RalewayRegularEot from "./Raleway-Regular.eot";
import RalewayRegularTtf from "./Raleway-Regular.ttf";

import RalewayBoldWoff from "./Raleway-Bold.woff";
import RalewayBoldWoff2 from "./Raleway-Bold.woff2";
import RalewayBoldEot from "./Raleway-Bold.eot";
import RalewayBoldTtf from "./Raleway-Bold.ttf";

import WorkSansRegularWoff from "./WorkSans-Regular.woff";
import WorkSansRegularWoff2 from "./WorkSans-Regular.woff2";
import WorkSansRegularEot from "./WorkSans-Regular.eot";
import WorkSansRegularTtf from "./WorkSans-Regular.ttf";

import WorkSansLightWoff from "./WorkSans-Light.woff";
import WorkSansLightWoff2 from "./WorkSans-Light.woff2";
import WorkSansLightEot from "./WorkSans-Light.eot";
import WorkSansLightTtf from "./WorkSans-Light.ttf";

import SourceCodeProBoldWoff from "./SourceCodePro-Bold.woff";
import SourceCodeProBoldWoff2 from "./SourceCodePro-Bold.woff2";
import SourceCodeProBoldEot from "./SourceCodePro-Bold.eot";
import SourceCodeProBoldTtf from "./SourceCodePro-Bold.ttf";

const GlobalFonts = createGlobalStyle`
 /* Raleway regular  */

@font-face {
  font-family: "Raleway";
  src: local('Raleway'), local('Raleway'),
  url(${RalewayRegularWoff2}) format('woff2'),
        url(${RalewayRegularWoff}) format('woff'),
        url(${RalewayRegularEot}),
        url(${RalewayRegularEot}?#iefix) format("embedded-opentype"),
        url(${RalewayRegularTtf}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

 /* Raleway bold  */

@font-face {
  font-family: "Raleway";
  src: local('Raleway'), local('Raleway'),
  url(${RalewayBoldWoff2}) format('woff2'),
        url(${RalewayBoldWoff}) format('woff'),
        url(${RalewayBoldEot}),
        url(${RalewayBoldEot}?#iefix) format("embedded-opentype"),
        url(${RalewayBoldTtf}) format('truetype');
  font-weight: 700;
  font-style: normal;
}

 /* Work sans regular  */

@font-face {
  font-family: "Work Sans";
  src: local('Work Sans'), local('Work Sans'),
  url(${WorkSansRegularWoff2}) format('woff2'),
        url(${WorkSansRegularWoff}) format('woff'),
        url(${WorkSansRegularEot}),
        url(${WorkSansRegularEot}?#iefix) format("embedded-opentype"),
        url(${WorkSansRegularTtf}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

 /* Work sans light  */

 @font-face {
  font-family: "Work Sans";
  src: local('Work Sans'), local('Work Sans'),
  url(${WorkSansLightWoff2}) format('woff2'),
        url(${WorkSansLightWoff}) format('woff'),
        url(${WorkSansLightEot}),
        url(${WorkSansLightEot}?#iefix) format("embedded-opentype"),
        url(${WorkSansLightTtf}) format('truetype');
  font-weight: 300;
  font-style: normal;
}

/* Souce code pro bold*/

@font-face {
  font-family: "Source Code Pro";
  src: local('Source Code Pro'), local('Source Code Pro'),
  url(${SourceCodeProBoldWoff2}) format('woff2'),
        url(${SourceCodeProBoldWoff}) format('woff'),
        url(${SourceCodeProBoldEot}),
        url(${SourceCodeProBoldEot}?#iefix) format("embedded-opentype"),
        url(${SourceCodeProBoldTtf}) format('truetype');
  font-weight: 700;
  font-style: normal;
}

`;

export default GlobalFonts;
