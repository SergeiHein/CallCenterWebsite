import React from "react";
import styled from "styled-components";

const SvgWrapper = styled.div`
  .lg-bg-shape,
  .sm-bg-shape {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
  }

  @media (max-width: 1024px) {
    .lg-bg-shape,
    .sm-bg-shape {
      transform: scaleX(-1);
    }
    .lg-bg-shape {
      height: 700px !important;
    }
    .sm-bg-shape {
      height: 600px !important;
    }
  }

  @media (max-width: 900px) {
    .lg-bg-shape,
    .sm-bg-shape {
      transform: scaleX(1.1) scaleX(-1);
    }
  }

  @media (max-width: 768px) {
    .lg-bg-shape,
    .sm-bg-shape {
      transform: scaleX(1.3) scaleX(-1);
    }
    .lg-bg-shape {
      height: 550px !important;
    }
    .sm-bg-shape {
      height: 400px !important;
    }
  }

  @media (max-width: 600px) {
    .lg-bg-shape,
    .sm-bg-shape {
      transform: scaleX(1.6) scaleX(-1);
    }
    .lg-bg-shape {
      height: 650px !important;
    }
    .sm-bg-shape {
      height: 580px !important;
    }
  }

  @media (max-width: 425px) {
    .sm-bg-shape {
      transform: scale(2) scaleX(-1);
    }
  }
`;

export default function HeaderSvg() {
  return (
    // oops

    <SvgWrapper>
      <svg
        width="1440"
        height="770"
        viewBox="0 0 1440 857"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="lg-bg-shape"
      >
        <path
          d="M564.54 633.58C265.179 712.427 63.4464 570.063 0 489.026V6.10352e-05H1440V819.947C1265.61 633.58 938.74 535.02 564.54 633.58Z"
          fill="url(#paint0_linear)"
        ></path>
        <path
          d="M564.54 670.633C265.179 749.48 63.4464 607.116 0 526.079V0H1440V857C1265.61 670.633 938.74 572.073 564.54 670.633Z"
          fill="#6385FB"
          fill-opacity="0.2"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="720"
            y1="602.5"
            x2="720"
            y2="-1.79559e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B06AB3">
              <animate
                attributeName="stop-color"
                values="#b06ab3; #4568dc; #b06ab3;"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="0.981956" stop-color="#4568DC">
              <animate
                attributeName="stop-color"
                values="#4568dc; #b06ab3; #4568dc;"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="1440"
        height="670"
        viewBox="0 0 1440 733"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="sm-bg-shape"
      >
        <path fill="url(#paint0_linear)" fill-opacity="0.6" id="morph-2">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
            M174.169 138.894C90.0814 181.046 19.5198 54.3615 0.5 0.5H1451V721C1451 678.847 1333.38 369.227 1215.75 416.9C1098.13 464.572 928.455 308.006 873.898 216.174C819.341 124.341 614.128 123.338 519.529 163.483C424.93 203.628 279.279 86.2034 174.169 138.894Z;
            M173.169 143.894C89.0814 186.046 19.0198 54.3615 0 0.5H1450V726C1450 683.847 1184 694 1162 568.5C1090.66 161.511 883.5 367 750 337.5C568.68 297.433 692 110 572.5 78.5C473.13 52.3062 278.279 91.2034 173.169 143.894Z;
            M175.169 143.894C91.0814 186.046 19.0198 53.8615 0 0H1452V726C1452 683.847 1021 562 1068.5 442.5C1115.38 324.559 930.057 327.332 875.5 235.5C820.943 143.668 654.5 313 535 281.5C435.63 255.306 280.279 91.2034 175.169 143.894Z;
            M174.169 138.894C90.0814 181.046 19.5198 54.3615 0.5 0.5H1451V721C1451 678.847 1333.38 369.227 1215.75 416.9C1098.13 464.572 928.455 308.006 873.898 216.174C819.341 124.341 614.128 123.338 519.529 163.483C424.93 203.628 279.279 86.2034 174.169 138.894Z"
          ></animate>
        </path>

        <path fill="url(#paint1_linear)" id="morph" fill-opacity="1">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
            M163.169 108.894C79.0814 151.046 20.0198 53.8615 1 0H1440V691C1440 648.848 1322.38 339.227 1204.75 386.9C1087.13 434.572 917.455 278.006 862.898 186.174C808.342 94.3413 603.128 93.3377 508.529 133.483C413.93 173.628 268.279 56.2033 163.169 108.894Z;
            M162.169 108.894C78.0814 151.046 19.0198 53.8615 0 0H1439V691C1439 648.847 1173 659 1151 533.5C1079.66 126.511 872.5 332 739 302.5C557.68 262.433 681 75 561.5 43.5C462.13 17.3062 267.279 56.2033 162.169 108.894Z;
            M162.169 108.894C78.0814 151.046 19.0198 53.8615 0 0H1439V691C1439 648.847 1008 527 1055.5 407.5C1102.38 289.559 917.057 292.332 862.5 200.5C807.943 108.668 641.5 278 522 246.5C422.63 220.306 267.279 56.2033 162.169 108.894Z;
            M163.169 108.894C79.0814 151.046 20.0198 53.8615 1 0H1440V691C1440 648.848 1322.38 339.227 1204.75 386.9C1087.13 434.572 917.455 278.006 862.898 186.174C808.342 94.3413 603.128 93.3377 508.529 133.483C413.93 173.628 268.279 56.2033 163.169 108.894Z"
          />
        </path>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="720"
            y1="0"
            x2="720"
            y2="684.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4568DC">
              <animate
                attributeName="stop-color"
                values="#4568dc; #b06ab3; #4568dc;"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1" stop-color="#B06AB3">
              <animate
                attributeName="stop-color"
                values="#b06ab3; #4568dc; #b06ab3;"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="720.5"
            y1="0"
            x2="720.5"
            y2="691"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0214106" stop-color="#4568DC">
              <animate
                attributeName="stop-color"
                values="#4568dc; #b06ab3; #4568dc;"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="0.835043" stop-color="#B06AB3">
              <animate
                attributeName="stop-color"
                values="#B06AB3; #4568dc; #B06AB3;"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </SvgWrapper>
  );
}
