import React from "react";
import ContactFormSvg from "./svg/ContactFormSvg";
import ContactformSubBgshape1 from "./svg/ContactformSubBgshape1";
import ContactformSubBgshape2 from "./svg/ContactformSubBgshape2";
import ContactOverlapsvg from "./svg/ContactOverlapsvg";
import ReCAPTCHA from "react-google-recaptcha";

import {
  ContactFormStyles,
  ContainerContactWrapper,
  ContactOverlap,
  ContainerContactForm,
  WrapperContactForm,
  ContactFormTitle,
  ContactInputForm,
  ContactWrapper,
  ContactSubWrapper,
  ContactLeftWrapper,
  ContactLeftInput,
  ContactLeftLabel,
  ContactRightWrapper,
  ContactRightSubInput,
  ContactRightLabel,
  ContactLeftSubWrapper,
  ContactRightSubWrapper,
  ContactLeftSubLabel,
  ContactLeftSubInput,
  ContactRightInput,
  ContactInputBox,
  ContactSubmit,
  ContactButton,
  ContactRecaptcha,
} from "../../styles/ContactPage_styles/ContactForm_Styles";

export default function ContactForm() {
  return (
    <>
      {/* <ContactSubBg> */}
      <ContactFormStyles>
        <ContactformSubBgshape1 />
        <ContactformSubBgshape2 />
        <ContainerContactWrapper>
          <ContactOverlap>
            <ContactOverlapsvg />
          </ContactOverlap>
          <ContainerContactForm>
            <WrapperContactForm>
              <ContactFormTitle>Get in Touch</ContactFormTitle>
              <p>We Are Always Happy To Make Valueable New Contacts</p>
            </WrapperContactForm>
            <ContactInputForm>
              <ContactWrapper>
                <ContactLeftWrapper>
                  <ContactLeftInput type="text" autocomplete="off" required />
                  <ContactLeftLabel>
                    <span className="Name">Enter Your Name</span>
                  </ContactLeftLabel>
                </ContactLeftWrapper>
                <ContactRightWrapper>
                  <ContactRightInput
                    type="number"
                    autocomplete="off"
                    required
                    onKeyDown={(e) => e.keyCode === 69 && e.preventDefault()}
                  />
                  <ContactRightLabel>
                    <span className="Phone">Enter Phone Number</span>
                  </ContactRightLabel>
                </ContactRightWrapper>
              </ContactWrapper>
              <ContactSubWrapper>
                <ContactLeftSubWrapper>
                  <ContactLeftSubInput
                    type="text"
                    autocomplete="off"
                    required
                  />
                  <ContactLeftSubLabel>
                    <span className="Email">Enter Your Mail</span>
                  </ContactLeftSubLabel>
                </ContactLeftSubWrapper>
                <ContactRightSubWrapper>
                  <ContactRightSubInput
                    className="dropdown"
                    autocomplete="off"
                    required
                  >
                    <option disabled value selected>
                      Select Category
                    </option>
                    <option value="student">Student</option>
                    <option value="job">Full Time Job</option>
                    <option value="learner">Full Time Learner</option>
                    <option value="preferNo">Prefer Not to Say</option>
                    <option value="other">Other</option>
                  </ContactRightSubInput>
                </ContactRightSubWrapper>
              </ContactSubWrapper>
              <ContactInputBox
                type="text"
                autocomplete="off"
                placeholder="Enter Message"
                required
              ></ContactInputBox>
              <ContactRecaptcha>
                <ReCAPTCHA sitekey="6LdXqMYZAAAAAEyy7wRbmaFkYvJVNvROxxLJARaA" />
              </ContactRecaptcha>
              <ContactSubmit>
                <ContactButton type="submit">Send</ContactButton>
              </ContactSubmit>
            </ContactInputForm>
          </ContainerContactForm>
          <ContactFormSvg></ContactFormSvg>
        </ContainerContactWrapper>
      </ContactFormStyles>
      {/* </ContactSubBg> */}
    </>
  );
}
