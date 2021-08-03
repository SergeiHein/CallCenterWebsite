import React from "react";
import { Icon } from "@iconify/react";
import sendAltFilled from "@iconify/icons-carbon/send-alt-filled";
import { useInView } from "react-intersection-observer";

import {
  NewsletterStyles,
  NewsletterCardWrapper,
  NewsletterCardTitles,
  NewsletterCardForm,
  NewsletterInputWrapper,
  NewsletterLabel,
  NewsletterCardInput,
  NewsletterButton,
} from "../../styles/homePage_Styles/Newsletter_Styles";

export default function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-70px",
  });
  return (
    <>
      <NewsletterStyles ref={ref}>
        <NewsletterCardWrapper className={`${inView ? "fade-in" : ""}`}>
          <NewsletterCardTitles>
            <h1 className="card-title">Subscribe to our newsletter !</h1>
            <h3 className="card-subtitle">
              Stay up to date with our latest news and discount for the products
            </h3>
          </NewsletterCardTitles>
          <NewsletterCardForm>
            <NewsletterInputWrapper>
              <NewsletterCardInput type="text" autoComplete="off" required />
              <NewsletterLabel>
                <span className="email">Enter your email to subscribe</span>
              </NewsletterLabel>
            </NewsletterInputWrapper>

            <NewsletterButton type="submit">
              <Icon
                icon={sendAltFilled}
                style={{ color: "#ffffff", fontSize: "35px" }}
              />
            </NewsletterButton>
          </NewsletterCardForm>
        </NewsletterCardWrapper>
      </NewsletterStyles>
    </>
  );
}
