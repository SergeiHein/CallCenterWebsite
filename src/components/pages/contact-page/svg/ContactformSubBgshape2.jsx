import React from "react";
import styled from "styled-components";

const ContactformSubBtnshape = styled.svg`
  position: absolute;
  z-index: -1;
  /* transform: translateY(600px); */
  bottom: 10%;
  width: 100%;
`;

export default function ContactformSubBgshape2() {
  return (
    <ContactformSubBtnshape
      width="1440"
      height="103"
      viewBox="0 0 1440 103"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M744.759 67.0697C1072.87 131.197 1344.97 93.7894 1440 67.0697V52.4777C1332.51 78.4777 1042.97 114.878 744.759 52.4777C372 -25.5223 103.5 25.4777 0 52.4777V67.0697C8.00281 62.81 334.616 -13.0896 744.759 67.0697Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M1440 38.5919C1344.97 65.3117 1072.87 102.719 744.759 38.5919C334.616 -41.5673 8.00278 34.3323 0 38.5919"
        stroke="url(#paint1_linear)"
        stroke-width="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1440"
          y1="56.4777"
          x2="-9.50004"
          y2="56.4778"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4568DC" />
          <stop offset="1" stop-color="#B06AB3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="1439.5"
          y1="37.6266"
          x2="5.05542e-05"
          y2="37.6265"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4568DC" />
          <stop offset="1" stop-color="#B06AB3" />
        </linearGradient>
      </defs>
    </ContactformSubBtnshape>
  );
}
