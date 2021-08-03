import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import bubbleMessageTalk from "@iconify/icons-si-glyph/bubble-message-talk";

const ChatBotStyles = styled.div`
  position: fixed;
  top: 80%;
  left: 90%;
  transition: translate(-80%, -90%);
  width: 60px;
  height: 60px;
  background: var(--primary-purple-color);
  box-shadow: var(--light-box-shadow);
  transition: all 400ms;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  opacity: 0;
  pointer-events: none;
  z-index: 99;
  cursor: pointer;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--normal-box-shadow);
  }

  @media (max-width: 1100px) {
    height: 55px;
    width: 55px;

    svg {
      font-size: 30px !important;
    }
  }

  @media (max-width: 768px) {
    z-index: 18;
  }

  @media (max-width: 600px) {
    left: 80%;
    top: 85%;
    transform: translate(0);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export default function LiveChat() {
  const [chatBotActive, setChatBotActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
  });

  function handleWindowScroll() {
    let windowHeight = document.body.scrollHeight;

    if (window.pageYOffset > windowHeight * 0.67) {
      setChatBotActive(true);
    } else {
      setChatBotActive(false);
    }
  }
  return (
    <ChatBotStyles className={`${chatBotActive ? "active" : ""}`}>
      <Icon
        icon={bubbleMessageTalk}
        style={{ color: "#ffffff", fontSize: "40px" }}
      />
    </ChatBotStyles>
  );
}
