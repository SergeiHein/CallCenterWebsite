import React from "react";
import styled from "styled-components";
import subpageHeaderBg from "../../assets/images/contact-page/subpage_header_bg.svg";

const SubpageHeader = styled.section`
  /* change later */
  /* max-width: 1400px; */
  height: 330px;

  @media (max-width: 800px) {
    height: 200px;
  }
  @media (max-width: 700px) {
    height: 150px;
  }
  @media (min-width: 1920px) {
    overflow-x: hidden;
  }
`;

const SubpageHeaderContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
  /* text-align: center; */
  margin: 60px auto 0 auto;
  color: #fff;
  @media (max-width: 1300px) {
    margin: 50px auto 0 auto;
  }

  @media (max-width: 1110px) {
    margin: 40px auto 0 auto;
  }
  @media (max-width: 1024px) {
    margin: 0px auto 0 auto;
  }
  @media (max-width: 400px) {
    width: 90%;
  }

  h1 {
    font-family: var(--title-font);
    font-size: 4rem;
    text-transform: capitalize;
    position: relative;
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 800px) {
      font-size: 40px;
    }
    @media (max-width: 700px) {
      font-size: 30px;
    }
    @media (max-width: 400px) {
      font-size: 30px;
    }
    @media (max-width: 390px) {
      font-size: 25px;
    }
    @media (max-width: 320px) {
      font-size: 22px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      border-radius: 9px;
      left: 10%;
      margin-top: 5px;
      width: 80%;
      height: 5px;
      background: #fff;
      @media (max-width: 800px) {
        height: 4px;
      }
      @media (max-width: 700px) {
        height: 3px;
      }
      @media (max-width: 400px) {
        height: 2px;
      }
    }
  }

  h3 {
    font-family: var(--content-font);
    font-size: 16px;
    font-weight: 300;
    margin-top: 40px;
    opacity: 0.8;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 800px) {
      font-size: 14px;
      margin-top: 30px;
    }
    @media (max-width: 700px) {
      font-size: 14px;
    }
    @media (max-width: 400px) {
      font-size: 14px;
    }
    @media (max-width: 390px) {
      font-size: 13px;
    }
    @media (max-width: 330px) {
      font-size: 12px;
    }
  }
`;

const SubpageHeaderBg = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (min-width: 1920px) {
    overflow-x: hidden;
    height: 1000px;
  }
  img {
    width: 100%;

    @media (min-width: 1920px) {
      height: 300px;
      transform: scale(2.5);
    }
    @media (max-width: 800px) {
      height: 200px;
      transform: scale(2) scaleX(-1);
    }
  }
`;

export default function SubPageHeader({ title, subtitle }) {
  return (
    <>
      <SubpageHeader>
        <SubpageHeaderContent>
          <h1 className="subpageHeader-title">{title}</h1>
          <h3 className="subpageHeader-subtitle">{subtitle}</h3>
        </SubpageHeaderContent>
        <SubpageHeaderBg>
          <img src={subpageHeaderBg} alt="" />
        </SubpageHeaderBg>
      </SubpageHeader>
    </>
  );
}
