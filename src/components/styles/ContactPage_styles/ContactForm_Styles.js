import styled from "styled-components";

export const ContactFormStyles = styled.section`
  margin: var(--section-between-margin) auto 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  vertical-align: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
export const ContainerContactWrapper = styled.div`
  max-width: 1600px;
  margin: var(--section-between-margin) auto 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  vertical-align: center;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const ContactOverlap = styled.div`
  position: relative;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  left: 32%;
  top: -30px;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  @media (max-width: 1000px) {
    left: 27%;
    width: 60px;
    height: 60px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerContactForm = styled.div`
  padding: 20px;
  max-width: 1400px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  height: 750px;
  width: 40%;
  background: #fff;
  margin-left: 5%;
  @media (max-width: 1150px) {
    width: 45%;
  }
  @media (max-width: 1000px) {
    width: 60%;
    margin-left: 0;
  }
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 70%;
    margin: 0 auto;
    height: 650px;
    transform: translateY(-10%);
  }
  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 550px) {
    width: 75%;
    height: 620px;
  }
  @media (max-width: 480px) {
    width: 80%;
    height: 580px;
  }
`;

export const WrapperContactForm = styled.div`
  margin: 40px 30px 0 30px;
  @media (max-width: 1390px) {
    margin-right: 20px;
  }
  @media (max-width: 900px) {
    margin: 30px 0 0 0;
  }
  @media (max-width: 800px) {
    margin: 20px 20px 0 25px;
  }
  @media (max-width: 510px) {
    margin: 20px 0px 0 20px;
  }
  @media (max-width: 480px) {
    margin: 20px 0 0 16px;
  }

  p {
    font-family: var(--content-font);
    color: #5a5a5a;
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: 700;
    @media (max-width: 1110px) {
      font-size: 15px;
    }
    @media (max-width: 800px) {
      font-size: 16px;
    }
    @media (max-width: 650px) {
      font-size: 14px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`;

export const ContactFormTitle = styled.h3`
  font-family: var(--content-font);
  color: #6385fb;
  font-size: 30px;
  padding-bottom: 10px;
  @media (max-width: 1110px) {
    font-size: 25px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 650px) {
    font-size: 25px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const ContactInputForm = styled.form`
  width: 90%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  @media (max-width: 900px) {
    height: 80px;
  }
  @media (max-width: 480px) {
    height: 80px;
    margin-top: 30px;
  }
`;

export const ContactSubWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  @media (max-width: 900px) {
    height: 80px;
  }
  @media (max-width: 480px) {
    height: 80px;
    margin-top: 20px;
  }
`;

export const ContactLeftWrapper = styled.div``;

export const ContactLeftLabel = styled.label`
  position: absolute;
  left: 0;
  top: 60%;
  width: 100%;
  pointer-events: none;
  font-family: var(--content-font);
  @media (max-width: 480px) {
    top: 0;
  }

  .Name {
    text-transform: capitalize;
    width: 100%;
    position: absolute;
    top: 50%;
    color: #5a5a5a;
    transform: translateY(-50%);
    left: 0;
    opacity: 1;
    font-size: 16px;
    transition: all 400ms;
    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    margin-top: 20px;
    width: 40%;
    height: 2px;
    background: #6385fb;
    top: 30%;
    left: 0;
    border-radius: 9px;
    opacity: 1;
    transition: opacity 400ms;
    @media (max-width: 900px) {
      width: 45%;
    }
    @media (max-width: 480px) {
      width: 90%;
    }
  }
`;

export const ContactLeftInput = styled.input`
  width: 40%;
  border: none;
  outline: none;
  bottom: 20%;
  position: absolute;
  @media (max-width: 480px) {
    bottom: 75%;
    width: 90%;
  }

  &[type="text"] {
    font-family: var(--content-font);
    font-weight: 400;
    font-size: 1rem;
    color: #353535;
    @media (max-width: 650px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
  &:focus + ${ContactLeftLabel} .Name,
  &:valid + ${ContactLeftLabel} .Name {
    top: -16px;
    opacity: 1;
    font-size: 12px;
    color: #6385fb;
  }
  &:focus + ${ContactLeftLabel}::after {
    opacity: 1;
  }
`;

export const ContactRightWrapper = styled.div``;

export const ContactRightLabel = styled.label`
  position: absolute;
  left: 55%;
  top: 60%;
  width: 100%;
  pointer-events: none;
  font-family: var(--content-font);
  @media (max-width: 480px) {
    left: 0%;
  }

  .Phone {
    text-transform: capitalize;
    width: 100%;
    position: absolute;
    top: 50%;
    color: #5a5a5a;
    transform: translateY(-50%);
    left: 0%;
    opacity: 1;
    font-size: 16px;
    transition: all 400ms;
    @media (max-width: 650px) {
      font-size: 14px;
    }
    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    margin-top: 20px;
    width: 40%;
    height: 2px;
    background: #6385fb;
    top: 30%;
    left: 0%;
    border-radius: 9px;
    opacity: 1;
    transition: opacity 400ms;
    @media (max-width: 900px) {
      width: 45%;
    }
    @media (max-width: 480px) {
      width: 90%;
    }
  }
`;

export const ContactRightInput = styled.input`
  width: 40%;
  border: none;
  outline: none;
  top: 60%;
  right: 5%;
  position: absolute;
  @media (max-width: 480px) {
    left: 0;
    width: 90%;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    font-family: var(--content-font);
    font-weight: 400;
    font-size: 1rem;
    color: #5a5a5a;
    @media (max-width: 650px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  &:focus + ${ContactRightLabel} .Phone,
  &:valid + ${ContactRightLabel} .Phone {
    top: -16px;
    opacity: 1;
    font-size: 12px;
    color: #6385fb;
  }
  &:focus + ${ContactRightLabel}::after {
    opacity: 1;
  }
`;

export const ContactLeftSubWrapper = styled.div``;
export const ContactRightSubWrapper = styled.div``;

export const ContactLeftSubLabel = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  pointer-events: none;
  font-family: var(--content-font);
  @media (max-width: 480px) {
    top: 0;
  }

  .Email {
    text-transform: capitalize;
    width: 100%;
    position: absolute;
    top: 50%;
    color: #5a5a5a;
    transform: translateY(-50%);
    left: 0;
    opacity: 1;
    font-size: 16px;
    transition: all 400ms;
    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    margin-top: 18px;
    width: 40%;
    height: 2px;
    background: #6385fb;
    top: 100%;
    left: 0;
    border-radius: 9px;
    opacity: 1;
    transition: opacity 400ms;
    @media (max-width: 900px) {
      width: 45%;
    }
    @media (max-width: 480px) {
      width: 90%;
    }
  }
`;

export const ContactLeftSubInput = styled.input`
  width: 40%;
  border: none;
  outline: none;
  top: 50%;
  position: absolute;
  @media (max-width: 480px) {
    width: 90%;
    top: 0;
  }

  &[type="text"] {
    font-family: var(--content-font);
    font-weight: 400;
    font-size: 1rem;
    color: #5a5a5a;
    @media (max-width: 650px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
  &:focus + ${ContactLeftSubLabel} .Email,
  &:valid + ${ContactLeftSubLabel} .Email {
    top: -16px;
    opacity: 1;
    font-size: 12px;
    color: #6385fb;
  }
  &:focus + ${ContactLeftSubLabel}::after {
    opacity: 1;
  }
`;

export const ContactRightSubInput = styled.select`
  position: absolute;
  left: 55%;
  top: 25%;
  border: none;
  outline: none;
  border-bottom: 2px solid #6385fb;
  width: 40%;
  font-family: var(--content-font);
  font-weight: 400;
  font-size: 1rem;
  color: #5a5a5a;
  height: 40px;
  @media (max-width: 900px) {
    width: 45%;
  }
  @media (max-width: 650px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    left: 0%;
    width: 90%;
  }
  .dropdown {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 0px;
    height: 25px;
    width: 50%;
  }
`;

export const ContactInputBox = styled.textarea`
  width: 100%;
  margin: 0 auto;
  height: 150px;
  margin-top: 5%;
  position: relative;
  border: 2px solid #c4c4c4;
  border-radius: 5px;
  outline: 0;

  &[type="text"] {
    font-family: var(--content-font);
    font-weight: 400;
    font-size: 1rem;
    padding: 20px 30px;
    @media (max-width: 650px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const ContactRecaptcha = styled.div`
  margin-top: 20px;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const ContactSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  @media (max-width: 800px) {
    margin-top: 5%;
  }
`;
export const ContactButton = styled.button`
  color: #fff;
  position: relative;
  background: #6385fb;
  font-family: var(--content-font);
  width: 30%;
  height: 30px;
  border: none;
  outline: none;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  @media (max-width: 800px) {
    width: 30%;
  }
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
`;
