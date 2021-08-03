import React from "react";
import styled from "styled-components";

const ContactformSubTopshape = styled.svg`
  position: absolute;
  z-index: -1;
  top: 10%;
  /* left: 0;
  right: 0; */
  width: 100%;
`;

export default function ContactformSubBgshape1() {
  return (
    <ContactformSubTopshape
      width="1440"
      height="105"
      viewBox="0 0 1440 105"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M695.241 56.0697C367.128 120.197 95.033 82.7894 0 56.0697V41.4777C107.494 67.4777 397.035 103.878 695.241 41.4777C1068 -36.5223 1336.5 14.4777 1440 41.4777V56.0697C1432 51.81 1105.38 -24.0896 695.241 56.0697Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M0 67.5919C95.033 94.3117 367.128 131.719 695.241 67.5919C1105.38 -12.5673 1432 63.3323 1440 67.5919"
        stroke="url(#paint1_linear)"
        stroke-width="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="5.12388e-06"
          y1="45.4777"
          x2="1449.5"
          y2="45.4778"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4568DC" />
          <stop offset="1" stop-color="#B06AB3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="0.500169"
          y1="66.6266"
          x2="1440"
          y2="66.6265"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4568DC" />
          <stop offset="1" stop-color="#B06AB3" />
        </linearGradient>
      </defs>
    </ContactformSubTopshape>
  );
}
