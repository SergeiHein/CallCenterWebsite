import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import quoteLeft from "@iconify/icons-fa-solid/quote-left";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";
import feedbacks from "../../../data/feedbacks.json";
import { useInView } from "react-intersection-observer";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([EffectFade]);

const FeedBackWrapper = styled.section`
  margin-top: 50px;
  .swiper-container {
    position: relative;

    .swiper-wrapper {
      display: flex;
      align-items: center;
    }

    &.fade-in-sides {
      &::before,
      &::after {
        transform: translateY(-50%) scaleX(1);
      }
    }

    &::before,
    &::after {
      transition: transform 600ms;
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%) scaleX(0);
      width: 150px;
      background: var(--primary-orange-color);
      height: 7px;
    }

    &::before {
      transform-origin: left;
      border-radius: 0px 9px 9px 0px;
      left: 0;
    }

    &::after {
      transform-origin: right;
      border-radius: 9px 0px 0px 9px;
      right: 0;
    }

    @media (max-width: 1024px) {
      &::before,
      &::after {
        width: 100px;
      }
    }

    @media (max-width: 768px) {
      &::before,
      &::after {
        width: 80px;
        height: 5px;
      }
    }

    @media (max-width: 600px) {
      &::before,
      &::after {
        display: none;
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: 70px;
  }

  @media (max-width: 768px) {
    margin-top: 200px;
  }

  @media (max-width: 480px) {
    margin-top: 150px;
  }
`;

const FeedbackStyles = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const FeedbackQuote = styled.p`
  text-align: center;
  font-size: 1.9rem;
  font-weight: 700;
  width: fit-content;
  margin: auto;
  color: var(--text-color);
  font-family: var(--title-font);
  position: relative;

  .quote-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(70px, 100%) scaleX(-1);
  }

  @media (max-width: 1200px) {
    font-size: 1.4rem;

    .quote-icon {
      font-size: 25px !important;
      transform: translate(50px, 90%) scaleX(-1);
    }
  }

  @media (max-width: 768px) {
    .quote-icon {
      font-size: 20px !important;
      transform: translate(35px, 80%) scaleX(-1);
    }
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
    .quote-icon {
      font-size: 15px !important;
      transform: translate(25px, 60%) scaleX(-1);
    }
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const FeedbakAuthor = styled.div`
  font-family: var(--title-font);
  text-align: center;
  margin-top: 40px;
  .author {
    font-size: 1rem;
    color: var(--primary-blue-color);
  }

  .author-role {
    font-size: 14px;
    color: var(--light-text-color);
  }

  @media (max-width: 1024px) {
    margin-top: 20px;

    .author {
      font-size: 14px;
    }

    .author-role {
      font-size: 12px;
    }
  }
  @media (max-width: 480px) {
    .author {
      font-size: 12px;
    }
    .author-role {
      font-size: 10px;
    }
  }
`;

export default function Feedback() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  return (
    <>
      <FeedBackWrapper ref={ref}>
        <Swiper
          allowTouchMove={false}
          centeredSlides={true}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 3500,
          }}
          speed={650}
          className={`${inView ? "fade-in-sides" : ""}`}
        >
          {feedbacks.map((one, i) => {
            return (
              <SwiperSlide key={i}>
                <FeedbackStyles>
                  <FeedbackQuote>
                    {one.content}
                    <Icon
                      icon={quoteLeft}
                      style={{ color: "#6385fb", fontSize: "30px" }}
                      className="quote-icon closed"
                    />
                  </FeedbackQuote>
                  <FeedbakAuthor>
                    <h3 className="author">{one.author}</h3>
                    <span className="author-role">{one.author_role}</span>
                  </FeedbakAuthor>
                </FeedbackStyles>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </FeedBackWrapper>
    </>
  );
}
