import React, { useContext } from "react";
import styled from "styled-components";
import { SeeMoreBtn } from "../../Layouts/SeeMoreBtn";
import { SmSizeContext } from "../../App";
import { InView } from "react-intersection-observer";

const CRMCardStyles = styled.div`
  width: 55%;
  min-height: 250px;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: var(--normal-box-shadow);
  background: #fff;
  padding: 35px 45px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 9px;
  transition: box-shadow 400ms, transform 800ms, opacity 800ms;
  transform: translateY(50px);
  opacity: 0;
  cursor: pointer;

  &.fade-in {
    transform: translateY(0);
    opacity: 1;
  }

  &.card-2 {
    width: 80%;
  }

  .crm-card-content {
    font-size: 16px;
    font-family: var(--content-font);
    font-weight: 300;
    line-height: 28px;
    margin-top: 25px;
  }

  .crm-card-2-content {
  }

  .crm-card-image-wrapper {
    position: relative;
    width: fit-content;

    img {
      height: auto;
    }

    &::after {
      content: "";
      position: absolute;
      top: calc(100% + 5px);
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--primary-orange-color);
      border-radius: 9px;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 10px 0 rgba(99, 133, 251, 0.19);
  }

  @media (min-width: 1600px) {
    &.card-2 {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    .crm-card-content {
      font-size: 14px;
    }
  }

  @media (max-width: 1100px) {
    min-height: initial;
    height: 240px;
    padding: 30px 40px;

    .crm-card-content {
      line-height: 26px;
    }
  }

  @media (max-width: 1024px) {
    width: 75%;
    &.card-2 {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 220px;

    align-items: flex-start;
    padding: 23px 30px;

    .crm-card-image-wrapper {
      &::after {
        height: 2px;
      }

      img {
        width: 120px;
      }
    }
  }

  @media (max-width: 600px) {
    .crm-card-content {
      line-height: 24px;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
    padding: 20px 20px;

    .crm-card-content {
      line-height: 20px;
      font-size: 12px;
      margin-top: 15px;
    }

    .crm-card-image-wrapper {
      img {
        width: 70px;
      }
    }
  }

  @media (max-width: 425px) {
    .crm-card-content {
      line-height: 18px;
    }
  }

  @media (max-width: 375px) {
    .crm-card-content {
      font-size: 10px;
    }
  }
`;

export default function CRMCard({ logo, content, card_2 }) {
  const smScreen = useContext(SmSizeContext);

  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <CRMCardStyles
          className={`${card_2 ? "card-2" : ""} ${inView ? "fade-in" : ""}`}
          ref={ref}
        >
          <div className="crm-card-image-wrapper">
            <img src={logo} alt="logo" />
          </div>
          <p className="crm-card-content">
            {smScreen ? content.substring(0, 205).concat(" ...") : content}
          </p>
          {smScreen ? (
            <SeeMoreBtn content="See more" />
          ) : (
            <SeeMoreBtn content="icon btn" />
          )}
        </CRMCardStyles>
      )}
    </InView>
  );
}
