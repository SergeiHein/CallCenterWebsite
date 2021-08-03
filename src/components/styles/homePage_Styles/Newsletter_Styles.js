import styled from "styled-components";

export const NewsletterStyles = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const NewsletterCardWrapper = styled.div`
  width: 50%;
  max-width: 900px;
  height: 250px;
  border-radius: 9px;
  background: linear-gradient(135deg, #4568dc, #b06ab3);
  box-shadow: var(--normal-box-shadow);
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: -70px;
  z-index: 5;
  transform: translateY(50px);
  transition-timing-function: linear;
  transition-timing-function: cubic-bezier(0, 0, 1, 1);
  transition: all 850ms;
  opacity: 0;

  &.fade-in {
    transform: translateY(0px);
    opacity: 1;
  }

  @media (max-width: 1024px) {
    height: 220px;
    width: 60%;
  }

  @media (max-width: 768px) {
    height: 200px;
    width: 75%;
  }

  @media (max-width: 600px) {
    height: 180px;
    margin-bottom: 0;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const NewsletterCardTitles = styled.div`
  color: #fff;
  .card-title {
    font-family: var(--email-subscription-font);
    font-size: 2rem;
    text-align: center;
  }

  .card-subtitle {
    font-family: var(--content-font);
    text-align: center;
    font-size: 16px;
    opacity: 0.8;
    font-weight: 300;
    width: 80%;
    margin: 10px auto 0 auto;
  }

  @media (max-width: 1200px) {
    .card-title {
      font-size: 1.7rem;
    }
    .card-subtitle {
      width: 60%;
    }
  }

  @media (max-width: 1024px) {
    .card-title {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    .card-subtitle {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .card-title {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    .card-title {
      font-size: 1.1rem;
    }
  }
`;

export const NewsletterCardForm = styled.form`
  width: 80%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const NewsletterInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const NewsletterLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-family: var(--content-font);

  .email {
    text-transform: capitalize;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
    color: #fff;
    opacity: 0.5;
    font-size: 16px;
    transition: all 400ms;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #fdfdfd;
    top: 100%;
    left: 0;
    border-radius: 9px;
    opacity: 0.8;
    transition: opacity 400ms;
  }

  @media (max-width: 480px) {
    .email {
      font-size: 12px;
    }
  }
`;

export const NewsletterCardInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 7px 40px 7px 10px;

  &[type="text"] {
    font-family: var(--content-font);
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
  }

  &:focus + ${NewsletterLabel} .email,
  &:valid + ${NewsletterLabel} .email {
    top: -16px;
    opacity: 1;
    font-size: 14px;
  }

  &:focus + ${NewsletterLabel}::after {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    &:focus + ${NewsletterLabel} .email,
    &:valid + ${NewsletterLabel} .email {
      top: -10px;
    }
  }

  @media (max-width: 600px) {
    padding: 7px 25px 7px 10px;
    &[type="text"] {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 7px 30px 7px 10px;

    &:focus + ${NewsletterLabel} .email,
    &:valid + ${NewsletterLabel} .email {
      top: -8px;
      opacity: 1;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;
export const NewsletterButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 10px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    svg {
      font-size: 30px !important;
    }
  }

  @media (max-width: 480px) {
    right: 5px;
    svg {
      font-size: 25px !important;
    }
  }
`;
