import React from "react";
import styled from "styled-components";
import cardBgShape from "../../../../assets/images/home-page/ccs_card_bg_shape.svg";

const BgShapeStyles = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 400ms;
  animation-play-state: paused;

  &.first {
  }

  &.second {
    transform: translate(-10%, 10%);
  }

  @media (max-width: 850px) {
    &.first,
    &.second {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 768px) {
    &.first,
    &.second {
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width: 480px) {
    &.first,
    &.second {
      display: none;
    }
  }
`;

export const CCSCardBgShape = ({ c }) => {
  return (
    // <BgShapeStyles
    //   width="90"
    //   height="90"
    //   viewBox="0 0 90 90"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={c}
    // >
    //   <path
    //     d="M11.5596 0H0L90 90V78.4404V0H11.5596Z"
    //     fill="#6385FB"
    //     fillOpacity="0.6"
    //   />
    // </BgShapeStyles>
    <BgShapeStyles src={cardBgShape} alt="" className={c} />
    // <BgShapeStyles
    //   width="90"
    //   height="90"
    //   viewBox="0 0 90 90"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={c}
    // >
    //   <path
    //     d="M11.5596 0H0L90 90V78.4404V0H11.5596Z"
    //     fill="url(#paint1_linear)"
    //     fill-opacity="0.6"
    //   />
    //   <defs>
    //     <linearGradient
    //       id="paint1_linear"
    //       x1="45"
    //       y1="45"
    //       x2="90"
    //       y2="-1.63913e-06"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stop-color="#4568DC" />
    //       <stop offset="1" stop-color="#B06AB3" />
    //     </linearGradient>
    //   </defs>
    // </BgShapeStyles>
  );
};
