import React from "react";
import styled from "styled-components";

const SectionTitleStyles = styled.h1`
  font-size: 2.2rem;
  color: var(--text-color);
  font-family: var(--title-font);
  position: relative;
  text-align: center;
  width: fit-content;
  text-transform: capitalize;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    top: -10%;
    left: -20px;
    width: 6px;
    height: 120%;
    background: var(--primary-blue-color);
    border-radius: 50px;
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;

    &::after {
      width: 3px;
      left: -10px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }

  @media (max-width: 405px) {
    &::after {
      width: 50%;
      left: 50%;
      top: calc(100% + 7px);
      height: 3px;
      transform: translateX(-50%);
    }
  }
`;

const SectionTitleWrapper = styled.div`
  width: 80%;
  margin: 0 auto var(--section-bottom-margin) auto;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const SectionTitle = ({ content }) => {
  return (
    <>
      <SectionTitleWrapper>
        <SectionTitleStyles>{content}</SectionTitleStyles>
      </SectionTitleWrapper>
    </>
  );
};
