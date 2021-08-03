import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../Layouts/SectionTitle";
import CRMCard from "../home-page/CRMCard";
import { useInView } from "react-intersection-observer";
import CRMLogo1 from "../../../assets/images/home-page/crm_logo_1.png";
import CRMLogo2 from "../../../assets/images/home-page/crm_logo_2.png";
import CRMLogo3 from "../../../assets/images/home-page/crm_logo_3.png";
import CRMSubBgShape from "../../../assets/images/home-page/crm_sub_bg_shape.svg";

const CRMStyles = styled.section`
  height: 1200px;
  margin-top: var(--section-between-margin);

  @media (max-width: 1200px) {
    height: 1150px;
  }

  @media (max-width: 1100px) {
    margin-top: 90px;
  }

  @media (max-width: 1024px) {
    height: 1100px;
  }

  @media (max-width: 768px) {
    height: 1050px;
  }

  @media (max-width: 480px) {
    height: 900px;
    margin-top: var(--section-between-margin);
  }
`;

const CRMContentWrapper = styled.div`
  position: relative;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-2-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    align-items: center;

    .sub-bg-shape {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 400ms;

      &.fade-in {
        opacity: 1;
      }

      img {
        max-width: 450px;
        width: 80%;
      }
    }
  }

  @media (min-width: 1600px) {
    .card-2-wrapper {
      margin: 0 auto;
    }
  }

  @media (max-width: 1100px) {
    .card-2-wrapper .sub-bg-shape {
      margin-left: 15px;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    /* height: 900px; */
    .card-2-wrapper {
      width: 90%;
      margin: 0 auto;
      .sub-bg-shape {
        img {
          transform: translateX(-30px);
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 825px;
    .card-2-wrapper {
      grid-template-columns: 1fr;

      .sub-bg-shape {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    height: 800px;
  }

  @media (max-width: 480px) {
    height: 700px;
  }
`;

const CRMMainBgShape = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 1000px !important;

  @media (max-width: 768px) {
    height: 900px !important;
  }

  @media (max-width: 600px) {
    transform: scale(1.5);
    height: 650px !important;
    top: 15%;
  }

  @media (max-width: 480px) {
    height: 500px !important;
  }
`;

export default function CRM() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <CRMStyles>
        <SectionTitle content="Customer Relationship Management" />
        <CRMContentWrapper>
          <CRMCard
            logo={CRMLogo1}
            content="*astTECS provides enterprise telecom products and Asterisk based Open Source communication solution. With strong focus on customer needs, *astTECS solution serves users across the globe and the company continues to leverage its strong capabilities in product innovation, helping enterprises and SMEs capitalize on latest in technology."
          ></CRMCard>

          <div className="card-2-wrapper">
            <div
              className={`sub-bg-shape ${inView ? "fade-in" : ""}`}
              ref={ref}
            >
              <img src={CRMSubBgShape} alt="customer relationship management" />
            </div>
            <CRMCard
              card_2={true}
              logo={CRMLogo2}
              content="XCALLY is an on-premise and cloud-based contact center solution that handles multiple channels including voice, chat, SMS, email, fax and others. It caters to inbound, outbound and blended call centers of all sizes. Other features include agent softphone, customizable dashboards, automations, triggers, webchat and so on."
            ></CRMCard>
          </div>

          <CRMCard
            logo={CRMLogo3}
            content="Freshdesk lets you streamline your company's customer support using the customer service software and helps you to efficiently manage your customers as you scale. Engage customers across every touchpoint with a 360-degree view of the customer—across e-mail, phone, chat, social media, and more."
          ></CRMCard>

          <CRMMainBgShape
            width="1440"
            height="1157"
            viewBox="0 0 1440 1157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M521.362 173C227.558 132.2 51.369 236.333 0 293.5V1120C145.601 992 495.844 901 863.099 979.5C1156.9 1042.3 1370.12 931.667 1440 868.5V38C1105.77 250 888.617 224 521.362 173Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M521.362 144.358C227.558 100.73 51.369 212.081 0 273.21V1157C145.601 1020.13 495.844 922.82 863.099 1006.76C1156.9 1073.91 1370.12 955.612 1440 888.067V0C1105.77 226.695 888.617 198.893 521.362 144.358Z"
              fill="url(#paint1_linear)"
              fillOpacity="0.4"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="28.0195"
                y1="304.5"
                x2="1440.23"
                y2="870.677"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4568DC" />
                <stop offset="1" stopColor="#B06AB3" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="28.0195"
                y1="284.973"
                x2="1465.19"
                y2="823.809"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4568DC" />
                <stop offset="1" stopColor="#B06AB3" />
              </linearGradient>
            </defs>
          </CRMMainBgShape>
        </CRMContentWrapper>
      </CRMStyles>
    </>
  );
}
