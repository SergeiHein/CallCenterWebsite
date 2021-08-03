import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import newsItems from "../../../data/news.json";
import { SeeMoreBtn } from "../../Layouts/SeeMoreBtn";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);

const SwiperBanner = styled.div`
  height: 60%;
  position: relative;
  img {
    border-radius: 9px 9px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.4;
    border-radius: 9px 9px 0 0;
  }
`;

const SwiperWrapper = styled.div`
  .swiper-wrapper {
    padding: 0 20px 20px 60px;
    .swiper-slide {
      width: 350px !important;
      height: 380px !important;
      margin-right: 100px;
    }
  }

  @media (max-width: 1024px) {
    .swiper-wrapper {
      .swiper-slide {
        width: 320px !important;
      }
    }
  }

  @media (max-width: 768px) {
    .swiper-wrapper {
      padding: 0 0 20px 20px;
      .swiper-slide {
        width: 280px !important;
        height: 340px !important;
        margin-right: 70px;
      }
    }
  }

  @media (max-width: 600px) {
    .swiper-wrapper .swiper-slide {
      width: 260px !important;
    }
  }

  @media (max-width: 480px) {
    .swiper-wrapper .swiper-slide {
      width: 230px !important;
      height: 300px !important;
    }
  }
`;

const SwiperContent = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  transition: height 600ms, border-radius 400ms;
  height: 40%;
  font-family: var(--title-font);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background: #fff;
  border-radius: 0 0 9px 9px;
  margin: 0 auto;
  align-items: flex-start;
  flex: 1;
  overflow: hidden;
  .news-date {
    color: var(--light-text-color);
    opacity: 0.8;
    font-size: 14px;
  }

  .news-title {
    color: var(--text-color);
    font-size: 1.3rem;
    font-weight: 700;
  }

  .news-content {
    font-family: var(--content-font);
    color: var(--light-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    opacity: 0;
    width: 0;
    height: 0;
    text-align: justify;
    transition: opacity 300ms ease-out 0;
  }

  .see-more-btn {
    font-size: 14px;

    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 1024px) {
    .news-title {
      font-size: 1.2rem;
    }
    .news-content {
      line-height: 22px;
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    .news-title {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    .news-date {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .news-date {
      font-size: 10px;
    }
    .news-content {
      line-height: 20px;
      font-size: 12px;
    }
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 9px;
  box-shadow: var(--normal-box-shadow);
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    .news-content {
      transition: opacity 300ms ease-in 200ms;
      margin-top: 10px;
      opacity: 1;
      width: 100%;
      height: auto;
    }

    ${SwiperContent} {
      height: 80%;
      border-radius: 9px;
    }
  }
`;

export default function NewsSlider() {
  const [smScreen, setSmScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setSmScreen(true);
    } else {
      setSmScreen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResizeForNav);
  });

  function handleResizeForNav() {
    if (window.innerWidth < 769) {
      setSmScreen(true);
    } else {
      setSmScreen(false);
    }
  }
  return (
    <>
      <SwiperWrapper>
        <Swiper slidesPerView={"auto"} navigation>
          {newsItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SliderWrapper>
                  <SwiperBanner>
                    <img src={item.imgURL} alt="news-banner" />
                  </SwiperBanner>

                  <SwiperContent>
                    <span className="news-date">{item.date}</span>
                    <h2 className="news-title">{item.title}</h2>
                    <p className="news-content">
                      {smScreen
                        ? item.content.substring(0, 130).concat(" ...")
                        : item.content.substring(0, 211).concat(" ...")}
                    </p>
                    <SeeMoreBtn content="Find out more" />
                  </SwiperContent>
                </SliderWrapper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperWrapper>
    </>
  );
}
