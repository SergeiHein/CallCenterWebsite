import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import arrowLongRight from "@iconify/icons-gg/arrow-long-right";
import styled, { keyframes } from "styled-components";
const breathAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
  }
  100% {

    transform: scale(1.4);
    opacity: 0;
  }
`;

const SeeMoreBtnStyles = styled(Link)`
  &.see-more-btn {
    text-decoration: none;
    color: var(--primary-orange-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--title-font);
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 700;
    height: 30px;
    position: relative;

    svg {
      margin: 3px 0 0 7px;
      transition: all 400ms;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 100%;
      width: 0%;
      height: 1px;
      background: var(--primary-orange-color);
      transition: width 400ms;
      border-radius: 9px;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  &.icon-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(35%, 35%);
    background: var(--btn-cta-color);
    height: 55px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    &::before {
      position: absolute;
      content: "";
      top: 0%;
      left: 0%;
      height: 55px;
      width: 55px;
      opacity: 0;
      transform-origin: 50% 50%;
      background: rgba(255, 200, 60, 0.55);
      border-radius: 50px;
      z-index: -1;
      animation: ${breathAnimation} 1.5s ease-in infinite;
    }

    &:hover {
      .icon-show {
        transform: translateX(200%);
      }
      .icon-hide {
        transform: translateX(0%);
        pointer-events: all;
      }
    }
  }

  @media (max-width: 1024px) {
    &.see-more-btn {
      font-size: 1rem;
    }

    &.icon-btn {
      height: 50px;
      width: 50px;
      transform: translate(25%, 25%);

      &::before {
        height: 50px;
        width: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    &.see-more-btn {
      svg {
        margin: 1px 0 0 7px;
        font-size: 20px !important;
      }
    }
  }

  @media (max-width: 600px) {
    &.see-more-btn {
      font-size: 14px;
    }
  }
`;

const BtnIconWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    color: #fff !important;
    transition: transform 150ms;
  }

  .icon-show {
  }

  .icon-hide {
    position: absolute;
    transform: translateX(-200%);
    pointer-events: none;
  }
`;

export const SeeMoreBtn = ({ content }) => {
  const [isIconBtn, setIsIconBtn] = useState(false);

  useEffect(() => {
    if (content.toLowerCase() === "icon btn") {
      setIsIconBtn(true);
    } else {
      setIsIconBtn(false);
    }
  }, [content]);

  return (
    <>
      <SeeMoreBtnStyles
        to="/"
        className={`${isIconBtn ? "icon-btn" : "see-more-btn"}`}
      >
        {!isIconBtn ? (
          <>
            {content}
            <Icon
              icon={arrowLongRight}
              style={{ color: "#dd933c", fontSize: "25px" }}
              className="icon-show"
            />
          </>
        ) : (
          <>
            <BtnIconWrapper>
              <Icon
                icon={arrowLongRight}
                style={{ color: "#dd933c", fontSize: "25px" }}
                className="icon-show"
              />

              <Icon
                icon={arrowLongRight}
                style={{ color: "#dd933c", fontSize: "25px" }}
                className="icon-hide"
              />
            </BtnIconWrapper>
          </>
        )}
      </SeeMoreBtnStyles>
    </>
  );
};
