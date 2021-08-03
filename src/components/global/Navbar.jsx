import React, { useState, useEffect, useRef, useContext } from "react";

import { SmSizeContext } from "../App";
import { useInView } from "react-intersection-observer";

import logo from "../../assets/images/logo.png";
import { Icon } from "@iconify/react";
import roundKeyboardArrowDown from "@iconify/icons-ic/round-keyboard-arrow-down";
import productIcon from "@iconify/icons-gridicons/product";
import priceTag from "@iconify/icons-entypo/price-tag";
import bxsContact from "@iconify/icons-bx/bxs-contact";
import twotoneContactSupport from "@iconify/icons-ic/twotone-contact-support";
import loginLine from "@iconify/icons-clarity/login-line";

import {
  Nav,
  NavWrapper,
  NavLogo,
  NavLinks,
  NavUl,
  NavLink,
  NavDemo,
  NavDropdown,
  NavLi,
  NavDropdownLink,
  NavDropdownLi,
  NavIntersection,
  NavMobile,
  NavMobileBgShape,
} from "../styles/Navbar_Styles";

export default function Navbar() {
  const [dropdownHovered, setDropdownHovered] = useState(null);
  const [navLeavesScreen, setNavLeavesScreen] = useState(false);
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [ref, inView] = useInView();

  const smScreen = useContext(SmSizeContext);

  const navRef = useRef(null);

  useEffect(() => {
    if (!inView) {
      setNavLeavesScreen(true);
    } else {
      setNavLeavesScreen(false);
    }
  }, [inView]);

  useEffect(() => {
    if (toggleMobileNav) {
      document.body.classList.add("fixed-for-mobile-nav");
    } else {
      document.body.classList.remove("fixed-for-mobile-nav");
    }
  }, [toggleMobileNav]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideNav);

    return () => document.removeEventListener("click", handleClickOutsideNav);
  });

  function handleClickOutsideNav(e) {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setToggleMobileNav(false);
    }
  }

  return (
    <>
      <Nav className={`${navLeavesScreen ? "fixed" : ""}`} ref={navRef}>
        <NavWrapper>
          <NavLogo className={`${toggleMobileNav ? "down-ph-size" : ""}`}>
            <img src={logo} alt="smilax global" />
          </NavLogo>
          <NavLinks className={`${toggleMobileNav ? "active-mobile-nav" : ""}`}>
            <NavUl>
              <NavLi>
                <NavLink to="/">
                  <Icon
                    icon={productIcon}
                    style={{ color: "#5a5a5a", fontSize: "22px" }}
                    className="nav-link-icon"
                  />
                  Products
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink to="/">
                  <Icon
                    icon={priceTag}
                    style={{ color: "#5a5a5a", fontSize: "22px" }}
                    className="nav-link-icon"
                  />
                  Pricing
                </NavLink>
              </NavLi>

              <NavLi
                className="dropdown-link"
                onMouseEnter={() => setDropdownHovered(true)}
                onMouseLeave={() => setDropdownHovered(false)}
              >
                <NavLink to="/" onMouseEnter={() => setDropdownHovered(true)}>
                  <Icon
                    icon={bxsContact}
                    style={{ color: "#5a5a5a", fontSize: "22px" }}
                    className="nav-link-icon"
                  />
                  Contact
                  <Icon
                    icon={roundKeyboardArrowDown}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                    className="arrow-down"
                  />
                </NavLink>
                <NavDropdown
                  className={`${
                    smScreen ? "" : dropdownHovered ? "open-dropdown" : ""
                  }`}
                  onMouseLeave={() => setDropdownHovered(false)}
                >
                  <NavDropdownLi>
                    <NavDropdownLink to="/contact">Contact Us</NavDropdownLink>
                  </NavDropdownLi>
                  <NavDropdownLi>
                    <NavDropdownLink to="/">About Us</NavDropdownLink>
                  </NavDropdownLi>
                  <NavDropdownLi>
                    <NavDropdownLink to="/">Partners</NavDropdownLink>
                  </NavDropdownLi>
                  <NavDropdownLi>
                    <NavDropdownLink to="/">Feedback</NavDropdownLink>
                  </NavDropdownLi>
                </NavDropdown>
              </NavLi>
              <NavLi>
                <NavLink to="/">
                  <Icon
                    icon={twotoneContactSupport}
                    style={{ color: "#5a5a5a", fontSize: "22px" }}
                    className="nav-link-icon"
                  />
                  FAQ
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink to="/">
                  <Icon
                    icon={loginLine}
                    style={{ color: "#5a5a5a", fontSize: "22px" }}
                    className="nav-link-icon"
                  />
                  Login
                </NavLink>
              </NavLi>
            </NavUl>
            <NavDemo className={`${navLeavesScreen ? "off-screen" : ""}`}>
              <NavLink to="/">Get a Demo</NavLink>
            </NavDemo>
            <NavMobileBgShape
              width="306"
              height="580"
              viewBox="0 0 306 580"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M161.329 247.943C76.6189 290.401 18.4804 74.4232 0 0V579.5H305.676V344.022C292.857 294.305 246.04 205.485 161.329 247.943Z"
                fill="#FFC83C"
                fillOpacity="0.05"
              />
              <path
                d="M0.258021 37.4803L0 36.4412V579.5H305.676V400.419C292.857 350.702 246.04 261.882 161.329 304.34C77.0093 346.602 19.0169 113.033 0.258021 37.4803Z"
                fill="#FFC83C"
                fillOpacity="0.1"
              />
            </NavMobileBgShape>
          </NavLinks>
          <NavMobile
            onClick={() => setToggleMobileNav(!toggleMobileNav)}
            className={`${toggleMobileNav ? "mobile-nav-open" : ""}`}
          >
            <svg
              className={`ham hamRotate ham1 ${
                toggleMobileNav ? "active" : ""
              }`}
              viewBox="0 0 100 100"
              width="80"
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </NavMobile>
        </NavWrapper>
      </Nav>

      <NavIntersection
        ref={ref}
        className={`${navLeavesScreen ? "nav-fixed" : ""}`}
      ></NavIntersection>
    </>
  );
}
