import React from "react";

import HeaderSvg from "./svg/HeaderSvg";
import { Link } from "react-router-dom";
import headerMainBg from "../../../assets/images/home-page/header_main_bg.png";
import {
  HeaderStyles,
  HeaderWrapper,
  HeaderTitle,
  HeaderContentWrapper,
  HeaderContent,
  HeaderBanner,
  HeaderButtons,
} from "../../styles/homePage_Styles/Header_Styles";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <HeaderStyles id="header">
      <HeaderWrapper>
        <HeaderContentWrapper className={`${inView ? "animate" : ""}`}>
          <HeaderTitle>
            Explore services <span>at best</span>
          </HeaderTitle>
          <HeaderContent>
            <p className="content">
              We provide our customers with our best solutions and services,
              with our powerful tools and developers to provide you with the
              best satisfications.
            </p>
            <p className="sub-content">
              <span>300+</span> customers and counting
            </p>
          </HeaderContent>
          <HeaderButtons>
            <Link to="/" className="header-link link-1">
              See our pricing
            </Link>
            <Link to="/" className="header-link link-2">
              Get a demo
            </Link>
          </HeaderButtons>
        </HeaderContentWrapper>
        <HeaderBanner ref={ref} className={`${inView ? "fade-in-bottom" : ""}`}>
          <img src={headerMainBg} alt="home" />
        </HeaderBanner>
      </HeaderWrapper>
      <HeaderSvg></HeaderSvg>
    </HeaderStyles>
  );
}
