import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 85%;
  margin: auto;
  display: block;
`;

const CardWarp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CardItem = styled.div`
  width: 25%;
  margin: 30px;
  border: 1px solid #cecece;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 250px;
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 34%;
  }
  @media (max-width: 528px) {
    width: 50%;
  }
`;
const CardHeader = styled.div`
  position: relative;
  border-radius: 50%;
  border: 1px solid #cecece;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;
const CardTitle = styled.h3`
  padding: 0 40px;
  padding-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  color: #5a5a5a;
  @media (max-width: 1024px) {
    padding-top: 0 30px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    padding-top: 0 30px;
    font-size: 14px;
  }
  @media (max-width: 528px) {
    padding-top: 0 30px;
    font-szie: 12px;
  }
`;
const CardAuthor = styled.p`
  font-family: "Work Sans", sans-serif;
  color: #6385fb;
  font-weight: bold;
  font-size: 14px;
  padding-top: 20px;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 11px;
  }
  @media (max-width: 528px) {
    padding: 10px;
    font-szie: 10px;
  }
`;
const CardText = styled.p`
  font-family: "Work Sans", sans-serif;
  color: #5a5a5a;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 11px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
  @media (max-width: 528px) {
    font-szie: 9px;
  }
`;

export default function Card() {
  return (
    <CardContainer>
      <CardWarp>
        <CardItem>
          <CardHeader>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.875 26.5C5.875 26.5 4 26.5 4 24.625C4 22.75 5.875 17.125 15.25 17.125C24.625 17.125 26.5 22.75 26.5 24.625C26.5 26.5 24.625 26.5 24.625 26.5H5.875ZM15.25 15.25C16.7418 15.25 18.1726 14.6574 19.2275 13.6025C20.2824 12.5476 20.875 11.1168 20.875 9.625C20.875 8.13316 20.2824 6.70242 19.2275 5.64752C18.1726 4.59263 16.7418 4 15.25 4C13.7582 4 12.3274 4.59263 11.2725 5.64752C10.2176 6.70242 9.625 8.13316 9.625 9.625C9.625 11.1168 10.2176 12.5476 11.2725 13.6025C12.3274 14.6574 13.7582 15.25 15.25 15.25Z"
                fill="#5A5A5A"
              />
            </svg>
          </CardHeader>
          <CardTitle>
            With their services,I can achieve my works 100 times faster.
          </CardTitle>
          <CardAuthor>Arthur. Johnnathan</CardAuthor>
          <CardText>Finance Manager</CardText>

          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 2.375C9.81914 2.375 2.375 9.81914 2.375 19C2.375 28.1809 9.81914 35.625 19 35.625C28.1809 35.625 35.625 28.1809 35.625 19C35.625 9.81914 28.1809 2.375 19 2.375ZM24.3475 19.2561L16.2428 25.1527C16.1983 25.1847 16.146 25.2037 16.0914 25.2078C16.0368 25.2119 15.9822 25.2009 15.9335 25.176C15.8848 25.151 15.8439 25.1132 15.8153 25.0665C15.7867 25.0199 15.7716 24.9662 15.7715 24.9115V13.1256C15.7713 13.0708 15.7863 13.017 15.8148 12.9701C15.8434 12.9233 15.8843 12.8853 15.9331 12.8603C15.9819 12.8354 16.0367 12.8244 16.0913 12.8286C16.146 12.8329 16.1984 12.8522 16.2428 12.8844L24.3475 18.7773C24.3857 18.8044 24.417 18.8403 24.4385 18.8819C24.4601 18.9236 24.4713 18.9698 24.4713 19.0167C24.4713 19.0636 24.4601 19.1098 24.4385 19.1515C24.417 19.1931 24.3857 19.229 24.3475 19.2561Z"
              fill="#6385FB"
            />
          </svg>
        </CardItem>
      </CardWarp>
    </CardContainer>
  );
}
