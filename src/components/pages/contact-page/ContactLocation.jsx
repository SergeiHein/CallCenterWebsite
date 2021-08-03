import React from "react";
import styled from "styled-components";
import ContactLocationIconsvg from "./svg/ContactLocationIconsvg";
import ContactFacebookIconsvg from "./svg/ContactFacebookIconsvg";
import ContactWorldIconsvg from "./svg/ContactWorldIconsvg";
import ContactInstaIconsvg from "./svg/ContactInstaIconsvg";
import ContactTwitIconsvg from "./svg/ContactTwitIconsvg";

const LocationContainer = styled.div`
  /* max-width: 1400px; */
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #4568dc, #b06ab3);
  margin: var(--section-between-margin) auto 100px auto;
  @media (max-width: 800px) {
    height: 500px;
  }
`;
const LocationSubContainer = styled.div`
  max-width: 1600px;
  width: 80%;
  margin: 0 auto;
  background: #fff;
  height: 400px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  transform: translateY(-50px);
  @media (max-width: 800px) {
    flex-direction: column;
    height: 600px;
  }
`;

const LocationWhereabout = styled.div`
  width: 30%;
  @media (max-width: 1210px) {
    width: 40%;
  }
  @media (max-width: 990px) {
    width: 50%;
  }
  @media (max-width: 860px) {
    width: 55%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const LocationWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const LocationTitle = styled.h3`
  margin-top: 50px;
  color: var(--primary-blue-color);
  font-size: 30px;
  font-family: var(--content-font);
`;

const LocationContent = styled.p`
  font-family: var(--content-font);
  color: var(--text-color);
  font-size: 14px;
  margin-top: 20px;
  font-weight: 400;
`;

const LocationIcon = styled.p`
  font-family: var(--content-font);
  color: var(--primary-blue-color);
  display: flex;
  font-size: 14px;
  margin-top: 50px;
  font-weight: 700;
`;
const LocationArea = styled.p`
  font-family: var(--content-font);
  color: var(--text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 30px 20px 10px 0;

  span {
    display: block;
    margin-top: 10px;
  }
`;

const LocationSocialIcon = styled.div`
  margin-top: 20px;
`;

const LocationMapWrapper = styled.div`
  width: 80%;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;

const LocationMap = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

export default function ContactLocation() {
  return (
    <LocationContainer>
      <LocationSubContainer>
        <LocationWhereabout>
          <LocationWrapper>
            <LocationTitle>We're Here</LocationTitle>
            <LocationContent>
              Our Door Is Always Open For A Cup Of Coffee
            </LocationContent>
            <LocationIcon>
              <ContactLocationIconsvg />
              Our Office
            </LocationIcon>
            <LocationArea>
              Shwe Gon Taing, Yuzana Tower, Kabar Aye Pagoda Rd, Township
              <span>Yangon</span>
            </LocationArea>
            <LocationSocialIcon>
              <ContactFacebookIconsvg />
              <ContactWorldIconsvg />
              <ContactInstaIconsvg />
              <ContactTwitIconsvg />
            </LocationSocialIcon>
          </LocationWrapper>
        </LocationWhereabout>
        <LocationMapWrapper>
          <LocationMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.40493075524!2d96.15241531476222!3d16.806256123728325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecf56d8d5091%3A0x942bd424a14ee28e!2sSmilax%20Global%20Co.%2C%20Ltd!5e0!3m2!1sen!2smm!4v1599032349818!5m2!1sen!2smm"
            width="600"
            height="450"
            frameborder="0"
            // style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></LocationMap>
        </LocationMapWrapper>
      </LocationSubContainer>
    </LocationContainer>
  );
}
