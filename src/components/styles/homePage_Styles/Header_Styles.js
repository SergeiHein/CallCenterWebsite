import styled from "styled-components";

export const HeaderStyles = styled.section`
  height: 600px;

  @media (max-width: 1024px) {
    height: 550px;
  }

  @media (max-width: 800px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 1400px;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: 100%;
  margin: 70px auto 0 auto;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1200px) {
    margin: 50px auto 0 auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 15px auto 0 auto;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }

  @media (max-width: 425px) {
    width: 85%;
  }

  @media (max-width: 365px) {
    width: 90%;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.9rem;
  color: #fff;
  font-family: var(--title-font);
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: 1px;
  width: 150%;

  span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      border-radius: 9px;
      left: 0;
      width: 100%;
      height: 5px;
      background: #fff;
    }
  }

  @media (max-width: 1200px) {
    font-size: 2.7rem;
    width: 170%;
  }

  @media (max-width: 1100px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1024px) {
    width: 200%;
  }

  @media (max-width: 900px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2.2rem;

    span::after {
      height: 3px;
    }
  }

  @media (max-width: 650px) {
    letter-spacing: 0px;
  }

  @media (max-width: 600px) {
    letter-spacing: 1px;
    font-size: 2.3rem;
    line-height: 50px;
    text-align: center;

    span {
      display: block;
      &::after {
        height: 3px;
        width: 20%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.8rem;
    line-height: 45px;
  }

  @media (max-width: 365px) {
    font-size: 1.65rem;
    line-height: 40px;
  }
`;
export const HeaderContentWrapper = styled.div``;

export const HeaderContent = styled.div`
  margin-top: 45px;
  color: #fff;
  font-family: var(--content-font);

  .content {
    font-size: 18px;
    width: 100%;
    line-height: 28px;
    text-align: justify;
  }

  .sub-content {
    margin-top: 30px;
    font-size: 16px;

    span {
      color: var(--btn-cta-color);
      font-weight: 700;
    }
  }

  @media (max-width: 1100px) {
    .content {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 25px;

    .content {
      line-height: 25px;
      text-align: left;
    }

    .sub-content {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .content {
      font-size: 14px;
      width: 80%;
    }

    .sub-content {
      font-size: 12px;
      margin-top: 20px;
    }
  }
  @media (max-width: 600px) {
    .content {
      width: 90%;
      margin: 0 auto;
      text-align: center;
    }

    .sub-content {
      text-align: center;
    }
  }

  @media (max-width: 365px) {
    .content {
      font-size: 12px;
    }

    .sub-content {
      text-align: center;
      font-size: 10px;
    }
  }
`;

export const HeaderBanner = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transform: translateY(50px);
  transition: 450ms;
  transition-timing-function: linear;
  transition-timing-function: cubic-bezier(0, 0, 1, 1);

  &.fade-in-bottom {
    opacity: 1;
    transform: translateY(0);
  }
  img {
    max-width: 550px;
    width: 95%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1360px) {
    margin-top: 50px;
  }

  @media (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (max-width: 1024px) {
    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderButtons = styled.div`
  font-family: var(--content-font);
  margin-top: 45px;
  text-transform: capitalize;

  .header-link {
    color: #fff;
  }
  .link-1 {
    padding: 11px 26px;
    background: rgba(255, 200, 60, 0.85);
    font-size: 16px;
    text-decoration: none;
    border-radius: 4px;
    margin-right: 30px;
    transition: background 400ms;

    &:hover {
      background: var(--primary-orange-color);
    }
  }

  .link-2 {
    font-size: 16px;
    transition: color 300ms;
    &:hover {
      color: var(--btn-cta-color);
    }
  }
  @media (max-width: 1024px) {
    margin-top: 35px;

    .link-1 {
      background: rgba(255, 200, 60, 1);
      padding: 10px 20px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 25px;

    .link-1 {
      padding: 8px 17px;
    }

    .link-1,
    .link-2 {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .link-1 {
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    .link-1 {
      padding: 7px 15px;
    }

    .link-2 {
      font-size: 12px;
    }
  }
`;
