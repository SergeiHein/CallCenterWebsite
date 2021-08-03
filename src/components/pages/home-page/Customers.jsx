import React, { useContext } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../Layouts/SectionTitle";
import { SmSizeContext } from "../../App";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SeeMoreBtn } from "../../Layouts/SeeMoreBtn";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([EffectFade, Autoplay]);

const CustomersStyles = styled.section`
  position: relative;
`;

const CustomersContentWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--primary-orange-color);
    width: 7%;
    height: 5px;
  }

  &::before {
    left: 0;
    border-radius: 0 25px 25px 0;
  }

  &::after {
    right: 0;
    border-radius: 25px 0 0 25px;
  }

  .swiper-container {
    width: 80%;
    padding: 20px 0;
  }
  .swiper-slide {
    /* width: 250px; */
    padding: 25px;
    width: 200px;
    height: 170px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 5px 0 rgba(60, 60, 100, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.8);
    transition: all 700ms;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      opacity: 0.75;
      transition: opacity 700ms;
      width: 100%;
      height: 100%;
    }

    &.swiper-slide-active {
      transform: scale(1);
      box-shadow: 5px 5px 20px 0 rgba(60, 60, 100, 0.2);

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        opacity: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    .swiper-slide {
    }
  }

  @media (max-width: 768px) {
    .swiper-slide {
      height: 140px;
      padding: 20px;
    }
  }

  @media (max-width: 425px) {
    .swiper-slide {
      height: 120px;
      padding: 15px;
    }
  }

  @media (max-width: 375px) {
    .swiper-slide {
    }
  }
`;

const CustomerBtn = styled.div`
  margin: 70px 0;
  display: flex;
  justify-content: center;

  .see-more-btn {
    font-size: 1.3rem;

    svg {
      font-size: 23px !important;
      margin: 2px 0 0 7px;
    }
  }

  @media (max-width: 1024px) {
    margin: 30px 0 70px 0;
  }

  @media (max-width: 600px) {
    .see-more-btn {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    margin: 20px 0 50px 0;
    .see-more-btn {
      font-size: 1rem;
    }
  }
`;

const CustomerLogo = styled.img`
  width: 100%;
  max-width: 175px;
  height: 100%;
  object-fit: contain;
  min-height: initial !important;
  min-height: none !important;

  @media (max-width: 1024px) {
    height: 80px;
  }
`;

export default function Customers() {
  const smScreen = useContext(SmSizeContext);

  return (
    <>
      <CustomersStyles>
        <SectionTitle content="Our proud customers" />
        <CustomersContentWrapper>
          <Swiper
            centeredSlides={true}
            loopFillGroupWithBlank={true}
            slidesPerView={5}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            loop={true}
            autoplay={{
              delay: smScreen ? 1500 : 2500,
              disableOnInteraction: false,
            }}
            speed={500}
          >
            {new Array(20).fill("").map((_, i) => {
              try {
                const testImage = require(`../../../assets/images/home-page/customers/${
                  i + 1
                }.png`);
                return (
                  <SwiperSlide key={i}>
                    <CustomerLogo src={testImage} alt="customer" />
                  </SwiperSlide>
                );
              } catch {
                return <></>;
              }
            })}
          </Swiper>
        </CustomersContentWrapper>
        <CustomerBtn>
          <SeeMoreBtn content="View All Customers"></SeeMoreBtn>
        </CustomerBtn>
      </CustomersStyles>
    </>
  );
}
