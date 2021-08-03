import React from "react";
import styled from "styled-components";
import CCSPhoto1 from "../../../assets/images/home-page/ccs_photo_1.jpg";
import CCSPhoto2 from "../../../assets/images/home-page/ccs_photo_2.jpg";
import CCSBgShape from "../../../assets/images/home-page/ccs_main_bg.svg";
import { SeeMoreBtn } from "../../Layouts/SeeMoreBtn";
import { SectionTitle } from "../../Layouts/SectionTitle";
import { CCSCardBgShape } from "./svg/CCSCardBgShape";
import { InView } from "react-intersection-observer";
import ccsIcon from "../../../assets/images/home-page/outsource_icon.svg";

const CCSStyles = styled.section`
  position: relative;
  margin-top: var(--section-between-margin);
`;

const CCSGridContentWrapper = styled.div`
  max-width: 1400px;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "photo1 content1 content1"
    "photo1 content1 content1"
    "photo1 svg svg"
    "photo2 svg svg"
    "photo2 content2 content2"
    "photo2 content2 content2";
  row-gap: 30px;

  .grid-1 {
    grid-area: photo1;
    transform: translateX(-50px);
    opacity: 0;
    transition: all 500ms;
  }

  .grid-1,
  .grid-4 {
    .grid-image-wrapper {
      position: relative;
      height: 100%;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.4;
      }

      img {
        width: 400px;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .grid-2,
  .grid-5 {
    z-index: 5;
  }
  .grid-2 {
    transform: translateX(50px);
    opacity: 0;
    transition: all 1000ms;
    margin: 40px 0 0 -100px;
    grid-area: content1;
  }

  .grid-3 {
    grid-area: svg;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-4 {
    grid-area: photo2;
    transform: translateX(-50px);
    opacity: 0;
    transition: all 500ms;
  }
  .grid-5 {
    margin: 0 0 40px -100px;
    grid-area: content2;
    transform: translateX(50px);
    opacity: 0;
    transition: all 1000ms;
  }

  @media (max-width: 1100px) {
    .grid-2 {
      margin: 40px 0 0 -170px;
    }

    .grid-5 {
      margin: 0 0 40px -170px;
    }
  }
  @media (max-width: 1024px) {
    width: 90%;
    row-gap: 20px;

    .grid-3 {
      transform: translateY(0);

      img {
        width: 300px;
      }
    }
    .grid-1,
    .grid-4 {
      .grid-image-wrapper {
        img {
          width: 350px;
        }
      }
    }

    .grid-2 {
      margin: 40px 0 0 -100px;
    }

    .grid-5 {
      margin: 0 0 40px -100px;
    }
  }

  @media (max-width: 875px) {
    .grid-2 {
      margin: 40px 0 0 -150px;
    }

    .grid-5 {
      margin: 0 0 40px -150px;
    }
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "content1"
      "svg"
      "content2";

    .grid-1,
    .grid-4 {
      display: none;
    }

    .grid-2,
    .grid-5 {
      margin: 0 0 0 0;
    }

    .grid-3 {
      transform: translateY(0);

      img {
        width: 280px;
      }
    }
  }

  @media (max-width: 600px) {
    .grid-3 {
      img {
        width: 250px;
      }
    }
  }

  @media (max-width: 480px) {
    .grid-3 {
      img {
        width: 200px;
      }
    }
  }

  @media (max-width: 320px) {
    .grid-5 {
      .card-wrapper .card-content {
        line-height: 16px;
      }
    }
  }
`;

const CCSGridContent = styled.div`
  &.fade-in {
    opacity: 1;
    transform: translateX(0);
  }
  .card-wrapper {
    padding: 35px 45px;
    background: #fff;
    border-radius: 9px;
    box-shadow: var(--light-box-shadow);
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: relative;
    transition: transform 300ms, box-shadow 400ms;

    .card-title {
      font-family: var(--title-font);
      color: var(--text-color);
      font-size: 1.6rem;
      display: flex;
      align-items: center;

      img {
        width: 30px;
        margin-right: 15px;
      }
    }

    .card-content {
      font-family: var(--content-font);
      color: var(--light-text-color);
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 27px;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0 10px 10px 0 rgba(99, 133, 251, 0.19);
      .second {
        transform: translate(10%, -10%);
      }
    }
  }

  @media (max-width: 1024px) {
    .card-wrapper {
      padding: 15px 35px;
      height: 230px;
      .card-title {
        font-size: 1.4rem;
      }
      .card-content {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 600px) {
    .card-wrapper {
      padding: 12px 30px;
      height: 210px;

      &:hover {
        box-shadow: 0 7px 5px 0 rgba(99, 133, 251, 0.19);
      }

      .card-content {
        line-height: 23px;
      }

      .card-title {
        font-size: 1.1rem;

        img {
          width: 25px;
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .card-wrapper {
      padding: 15px 23px;
      height: 200px;
      justify-content: space-between;

      .card-content {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 425px) {
    .card-wrapper {
      .card-content {
        font-size: 12px;
        line-height: 20px;
      }

      .card-title img {
        width: 20px;
      }
    }
  }

  @media (max-width: 375px) {
    .card-wrapper {
      .card-content {
        font-size: 10px;
        line-height: 18px;
      }

      .card-title img {
        width: 15px;
      }
    }
  }

  @media (max-width: 320px) {
    .card-wrapper .card-title {
      font-size: 1rem;
    }
  }
`;

export default function CCS() {
  return (
    <>
      <CCSStyles>
        <SectionTitle content="Call center solutions" />
        <CCSGridContentWrapper>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <>
                <CCSGridContent className={`grid-1 ${inView ? "fade-in" : ""}`}>
                  <div className="grid-image-wrapper">
                    <img src={CCSPhoto1} alt="on premises" />
                  </div>
                </CCSGridContent>
                <CCSGridContent
                  className={`grid-2 ${inView ? "fade-in" : ""}`}
                  ref={ref}
                >
                  <div className="card-wrapper">
                    <h2 className="card-title">
                      <img src={ccsIcon} alt="on premises" />
                      On premises
                    </h2>
                    <p className="card-content">
                      We installs and runs on computers on the premises of the
                      person or organization using the software and give a
                      training rather than at a remote facility such as a server
                      farm or cloud.
                    </p>
                    <SeeMoreBtn content="See more" />
                    <CCSCardBgShape c="first"></CCSCardBgShape>
                    <CCSCardBgShape c="second"></CCSCardBgShape>
                  </div>
                </CCSGridContent>
              </>
            )}
          </InView>

          <CCSGridContent className="grid-3">
            <img src={CCSBgShape} alt="question icon" />
          </CCSGridContent>
          <InView triggerOnce={true} rootMargin="50px">
            {({ inView, ref }) => (
              <>
                <CCSGridContent className={`grid-4 ${inView ? "fade-in" : ""}`}>
                  <div className="grid-image-wrapper">
                    <img src={CCSPhoto2} alt="outsource" />
                  </div>
                </CCSGridContent>
                <CCSGridContent
                  className={`grid-5 ${inView ? "fade-in" : ""}`}
                  ref={ref}
                >
                  <div className="card-wrapper">
                    <h2 className="card-title">
                      <img src={ccsIcon} alt="outsource" />
                      Outsource services
                    </h2>
                    <p className="card-content">
                      We hire a party outside a company to perform services and
                      create goods that traditionally were performed in-house by
                      the company's own employees and staff. Outsourcing is a
                      practice usually undertaken by companies as a cost-cutting
                      measure
                    </p>
                    <SeeMoreBtn content="See more" />
                    <CCSCardBgShape c="first"></CCSCardBgShape>
                    <CCSCardBgShape c="second"></CCSCardBgShape>
                  </div>
                </CCSGridContent>
              </>
            )}
          </InView>
        </CCSGridContentWrapper>
      </CCSStyles>
    </>
  );
}
