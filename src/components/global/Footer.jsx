import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import facebookFilled from "@iconify/icons-ant-design/facebook-filled";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
import twitterSquareFilled from "@iconify/icons-ant-design/twitter-square-filled";

const FooterStyles = styled.footer`
  width: 100%;
  height: 250px;
  background: var(--text-color);

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 600px) {
    height: 170px;
    margin-top: calc(var(--section-between-margin) / 2);
  }

  @media (max-width: 375px) {
    height: 150px;
  }
`;

const FooterWrapper = styled.div`
  max-width: 1450px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 70px;
  position: relative;

  @media (max-width: 1200px) {
    padding-top: 40px;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    width: 80%;
    flex-direction: column;
    padding-top: 0;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px 0;
  }
  @media (max-width: 480px) {
    /* padding-top: 60px; */
  }
`;

const FooterLogo = styled.div`
  @media (max-width: 768px) {
    img {
      width: 80px;
    }
  }
`;

const FooterLinks = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--title-font);

  .footer-links-wrapper {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-right: 45px;
    }
  }

  @media (max-width: 600px) {
    height: auto;
    flex: unset;

    .footer-links-wrapper:nth-child(2n),
    .footer-links-wrapper:nth-child(3n) {
      display: none;
    }
  }

  /* @media (max-width: 480px) { */
`;

const FooterSocialMedias = styled.div`
  @media (max-width: 768px) {
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    height: auto;
  }

  /* @media (max-width: 480px) {
    flex-direction: row;
  } */
`;

const FooterCopyright = styled.span`
  position: absolute;
  top: 85%;
  left: 10%;
  font-family: var(--title-font);
  color: #fff;
  font-size: 14px;
  opacity: 0.9;

  @media (max-width: 600px) {
    width: fit-content;
    top: 80%;
    left: 70%;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    top: 70%;
  }

  @media (max-width: 425px) {
    /* top: 80%; */
    left: 60%;
    /* transform: translateX(-50%); */
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 400ms;

  &:hover {
    opacity: 1;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 12px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const FooterSocialMedia = styled(Link)`
  margin-right: 30px;
  opacity: 0.8;
  transition: opacity 400ms;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    svg {
      font-size: 30px !important;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    margin-right: 25px;
    svg {
      font-size: 25px !important;
    }
  }

  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <FooterWrapper>
          <FooterLogo>
            <img src={logo} alt="smilax global" />
          </FooterLogo>
          <FooterLinks>
            <div className="footer-links-wrapper">
              <FooterLink to="/">Terms and Use</FooterLink>
              <FooterLink to="/">Policies</FooterLink>
            </div>
            <div className="footer-links-wrapper">
              <FooterLink to="/">Terms and Use</FooterLink>
              <FooterLink to="/">Policies</FooterLink>
            </div>
            <div className="footer-links-wrapper">
              <FooterLink to="/">Terms and Use</FooterLink>
              <FooterLink to="/">Policies</FooterLink>
            </div>
          </FooterLinks>
          <FooterSocialMedias>
            <FooterSocialMedia to="/">
              <Icon
                icon={facebookFilled}
                style={{ color: "#ffffff", fontSize: "35px" }}
              />
            </FooterSocialMedia>
            <FooterSocialMedia to="/">
              <Icon
                icon={instagramFilled}
                style={{ color: "#ffffff", fontSize: "35px" }}
              />
            </FooterSocialMedia>
            <FooterSocialMedia to="/">
              <Icon
                icon={twitterSquareFilled}
                style={{ color: "#ffffff", fontSize: "35px" }}
              />
            </FooterSocialMedia>
          </FooterSocialMedias>
          <FooterCopyright>
            Copyright &#169; {new Date().getFullYear()} by
          </FooterCopyright>
        </FooterWrapper>
      </FooterStyles>
    </>
  );
}
