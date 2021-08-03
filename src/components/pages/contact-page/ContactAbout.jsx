import React from "react";
import styled, { keyframes } from "styled-components";
import ContactEmailsvg from "./svg/ContactEmailsvg";
import ContactPhonesvg from "./svg/ContactPhonesvg";

const AboutContainer = styled.div`
  max-width: 1000px;
  width: 60%;
  margin: -130px auto 0 auto;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  height: 240px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;

  @media (max-width: 1400px) {
    width: 70%;
    margin: -160px auto 0 auto;
    

  }

  @media (max-width: 1300px) {
    width: 70%;
    margin: -160px auto 0 auto;
  }
  @media (max-width: 1110px) {
    width: 70%;
    margin: -180px auto 0 auto;
  }
  @media (max-width: 1024px) {
    width: 80%;
    margin: -180px auto 0 auto;
  }
  @media (max-width: 900px) {
    margin: -200px auto 0 auto;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const AboutText = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 17px;
  line-height: 27px;
  padding: 20px 40px;
  padding-bottom: 0;
  color: #5a5a5a;
  @media (max-width: 1300px) {
    font-size: 16px;
    padding: 20px 30px;
  }
`;

const AboutRow = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 0;
`;

const AboutPhone = styled.p`
  float: left;
  font-size: 17px;
  font-family: "Raleway", sans-serif;
  font-weight: Bold;
  display: flex;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const AboutEmail = styled.p`
  float: right;
  font-size: 17px;
  font-family: "Raleway", sans-serif;
  font-weight: Bold;
  display: flex;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const Imove = keyframes`

0%{transform:translateY(-100%);}
50%{transform:translateY(-125%);}
100%{transform:translateY(-100%);}
`;
const AboutIcon = styled.svg`
  position: absolute;
  top: calc(100% - 15px);
  left: 45%;
  transform: translate(-50%, -100%);
  animation: ${Imove} 1s infinite;
  @media (max-width: 1024px) {
    font-size: 16px;
    /* left: 45%; */
  }
`;
  function ClickScrollDown(){
    window.scrollTo(0,600);
  }
export default function ContactAbout() {
  return (
    <AboutContainer>
      <AboutText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere illum
        odio perspiciatis cum qui quaerat perferendis! Consectetur nostrum
        accusantium iure quas laborum eum quisquam, dolores eius, minus
        aspernatur amet. Enim?
      </AboutText>

      <AboutRow>
        <AboutPhone>
          <ContactPhonesvg />
          09 799582588
        </AboutPhone>

        <AboutEmail>
          <ContactEmailsvg />
          smilaxglobal@gmail.com
        </AboutEmail>
      </AboutRow>
      <AboutIcon
        onClick={ClickScrollDown}
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2102 16.2575L21.0002 23.0475L27.7902 16.2575C27.9522 16.0955 28.1445 15.967 28.3562 15.8793C28.5679 15.7916 28.7948 15.7465 29.0239 15.7465C29.253 15.7465 29.4799 15.7916 29.6916 15.8793C29.9033 15.967 30.0956 16.0955 30.2577 16.2575C30.4197 16.4195 30.5482 16.6119 30.6359 16.8235C30.7236 17.0352 30.7687 17.2621 30.7687 17.4912C30.7687 17.7204 30.7236 17.9473 30.6359 18.1589C30.5482 18.3706 30.4197 18.563 30.2577 18.725L22.2252 26.7575C22.0633 26.9197 21.871 27.0484 21.6592 27.1363C21.4475 27.2241 21.2206 27.2693 20.9914 27.2693C20.7622 27.2693 20.5353 27.2241 20.3236 27.1363C20.1119 27.0484 19.9196 26.9197 19.7577 26.7575L11.7252 18.725C11.5629 18.5631 11.4342 18.3708 11.3464 18.1591C11.2586 17.9474 11.2134 17.7204 11.2134 17.4912C11.2134 17.2621 11.2586 17.0351 11.3464 16.8234C11.4342 16.6117 11.5629 16.4194 11.7252 16.2575C12.4077 15.5925 13.5277 15.575 14.2102 16.2575Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="20.991"
            y1="15.7465"
            x2="20.991"
            y2="27.2693"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4568DC" />
            <stop offset="1" stop-color="#B06AB3" />
          </linearGradient>
        </defs>
      </AboutIcon>
    </AboutContainer>
  );
}
