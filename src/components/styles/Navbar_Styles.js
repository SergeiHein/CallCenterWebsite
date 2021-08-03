import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;
  min-height: 100px;
  transition: all 400ms;

  &.fixed {
    position: fixed;
    top: 0;
    background: linear-gradient(135deg, #4568dc, #b06ab3);
    z-index: 19;
    box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.08);

    nav ul li {
      &.dropdown-link {
        a svg {
          color: #fff !important;
        }
      }
      &::after {
        background: #fff;
      }
      a {
        color: #fff;
      }
    }

    .ham .line {
      stroke: #fff;
    }
  }

  @media (max-width: 768px) {
    &.fixed {
      .ham .line {
        stroke: #fff;
      }
    }
  }

  @media (max-width: 480px) {
    &.fixed {
      min-height: initial;
      height: 75px;
    }
  }
`;

export const NavWrapper = styled.div`
  max-width: 1600px;
  width: 85%;
  margin: 0 auto;
  min-height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--title-font);

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    font-family: var(--content-font);
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 100%;
  }
`;

export const NavLogo = styled.div`
  margin-right: 80px;

  @media (max-width: 1024px) {
    margin-right: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    img {
      width: 120px;
    }
  }
`;

export const NavLinks = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    transform: translateX(105%);
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    -webkit-box-shadow: -12px 0px 24px -4px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: -12px 0px 24px -4px rgba(0, 0, 0, 0.08);
    box-shadow: -12px 0px 24px -4px rgba(0, 0, 0, 0.08);
    background: #fff;
    z-index: 9;
    transition: 300ms;

    &.active-mobile-nav {
      transform: translateX(0);
      transition: 350ms;
      transition-timing-function: linear;
      transition-timing-function: cubic-bezier(0, 0, 1, 1);
    }
  }

  @media (max-width: 600px) {
    width: 60%;
    left: 40%;
  }

  @media (max-width: 425px) {
    width: 70%;
    left: 30%;
  }

  @media (max-width: 320px) {
    width: 80%;
    left: 20%;
  }
`;

export const NavUl = styled.ul`
  width: 65%;
  list-style-type: none;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    height: 70%;
    background: none;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    height: 80%;
    padding-top: 50px;
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 15px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  transition: opacity 400ms;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-link-icon {
    display: none;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    color: var(--light-text-color) !important ;
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border-radius: 4px;

    .nav-link-icon {
      opacity: 0.9;
      display: flex;
      margin-right: 18px;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;

    .nav-link-icon {
      font-size: 18px !important;
      margin-right: 14px;
    }
  }
`;

export const NavDemo = styled.div`
  a {
    padding: 11px 18px 10px;
    background: #fff;
    color: var(--primary-blue-color);
    font-size: 14px;
    border-radius: 4px;
    transition: background 400ms;

    &:hover {
      background: #f4f4f4;
    }
  }

  &.off-screen {
    a {
      background: var(--btn-cta-color);
      color: #fff;

      &:hover {
        background: var(--primary-orange-color);
      }
    }
  }

  @media (max-width: 1024px) {
    a {
      padding: 10px 15px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 70%;

    a {
      background: var(--btn-cta-color);
      color: #fff !important;
      padding: 15px 0;
      display: flex;
      justify-content: center;
      text-decoration: none;

      &:hover {
        background: var(--primary-orange-color);
      }
    }
  }

  @media (max-width: 480px) {
    a {
      padding: 10px 0;
    }
  }
`;

export const NavDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 10px;
  background: #fff;
  box-shadow: var(--light-box-shadow);
  border-radius: 4px;
  min-width: 150px;
  transition: opacity 400ms;
  z-index: 19;
  opacity: 0;
  pointer-events: none;

  &.open-dropdown {
    opacity: 1;
    pointer-events: all;
  }

  @media (max-width: 768px) {
    position: static;
    top: 0;
    transform: translate(0%);
    box-shadow: none;
    opacity: 1;
    pointer-events: all;
    left: 0%;
    padding: 0 0 0 75px;
    background: none;
  }
`;

export const NavLi = styled.li`
  position: relative;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    bottom: 7px;
    left: 13px;
    width: 0px;
    height: 3px;
    background: #fff;
    border-radius: 9px;
    transition: width 400ms;
  }

  &:hover {
    &::after {
      width: 80%;
    }
  }

  @media (max-width: 800px) {
    &::after {
      bottom: 9px;
    }
    &:hover {
      &::after {
        width: 75%;
      }
    }
  }

  @media (max-width: 768px) {
    &.dropdown-link {
      flex-direction: column;
      align-items: flex-start;
      a .arrow-down {
        display: none;
      }
    }
    &::after {
      display: none;
    }
  }
`;

export const NavDropdownLink = styled(Link)`
  text-decoration: none;
  color: var(--light-text-color) !important;
  font-size: 14px;
  font-weight: 700;
  height: 100%;
  display: block;
  padding: 15px 14px;
  transition: background 400ms;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    background: #f4f4f4;
  }

  @media (max-width: 768px) {
    padding: 18px 0;
    color: var(--light-text-color);
    font-weight: 400;

    &:hover {
      background: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const NavDropdownLi = styled.div`
  width: 100%;
`;

export const NavIntersection = styled.div`
  &.nav-fixed {
    height: 100px;
  }
`;

export const NavMobile = styled.div`
  display: none;
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 60px;
    height: 60px;
  }
  .hamRotate.active {
    transform: rotate(45deg);

    .line {
      stroke: #fff;
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
    .line {
      stroke: #fff;
    }
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, stroke 400ms;
    stroke: #fff;
    stroke-width: 5.5;
    stroke-linecap: round;
  }
  .ham1 .top {
    stroke-dasharray: 40 139;
  }
  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }
  .ham1.active .top {
    stroke-dashoffset: -98px;
  }
  .ham1.active .bottom {
    stroke-dashoffset: -138px;
  }

  @media (max-width: 768px) {
    display: block;
    z-index: 59;
    &.mobile-nav-open .ham .line {
      stroke: var(--text-color);
    }
  }

  @media (max-width: 480px) {
    .ham {
      width: 55px;
      height: 55px;
    }
  }

  @media (max-width: 375px) {
    .ham {
      width: 50px;
      height: 50px;
    }
  }
`;

export const NavMobileBgShape = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
    z-index: 18;
  }
`;
