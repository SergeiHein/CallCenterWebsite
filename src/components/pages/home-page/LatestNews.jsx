import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../Layouts/SectionTitle";
import { NewsSvg } from "./svg/NewsSvg";
import NewsSlider from "./NewsSlider";

const LatestNewsStyles = styled.section`
  position: relative;
  padding: 10% 0 0 0;

  @media (min-width: 1600px) {
    padding: 12% 0 0 0;
  }

  @media (max-width: 1024px) {
  }
`;

const LatestNewsContentWrapper = styled.div`
  width: 80%;
  margin-left: auto;

  .swiper-container {
    padding-bottom: 200px;

    .swiper-button-prev,
    .swiper-button-next {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--primary-blue-color);
      width: 55px !important;
      height: 55px !important;
      border-radius: 50px;
      top: calc(100% - 115px);
      transform: translateY(-57.5px);
      left: 80%;
      width: auto;
      height: auto;
      margin-top: 0;

      &::after {
        font-size: 1.3rem;
        color: #fff;
      }
    }

    .swiper-button-prev {
      transform: translate(-100px, -57.5px);
    }
  }

  @media (min-width: 1600px) {
    .swiper-container .swiper-wrapper {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1024px) {
    width: 90%;
    .swiper-container {
      padding-bottom: 150px;
      .swiper-button-prev,
      .swiper-button-next {
        width: 45px !important;
        height: 45px !important;
        top: calc(100% - 75px);

        &::after {
          font-size: 1rem;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin: auto;
    width: 90%;
  }

  @media (max-width: 600px) {
    .swiper-container {
      .swiper-button-prev,
      .swiper-button-next {
        width: 40px !important;
        height: 40px !important;

        &::after {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .swiper-container {
      padding-bottom: 125px;
      .swiper-button-prev {
        left: 35%;
        transform: translate(-35%, -31.25px);
      }
      .swiper-button-next {
        left: 65%;
        transform: translate(-65%, -31.25px);
      }
    }
  }
`;

export default function LatestNews() {
  return (
    <>
      <LatestNewsStyles>
        <SectionTitle content="Latest News"></SectionTitle>
        <LatestNewsContentWrapper>
          <NewsSlider></NewsSlider>
        </LatestNewsContentWrapper>
        <NewsSvg></NewsSvg>
      </LatestNewsStyles>
    </>
  );
}
