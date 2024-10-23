import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0% {
    top: 70px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.5) scaleY(0.4);
  }

  20% {
    border-radius: 50%;
    transform: scaleX(1) scaleY(1);
  }

  100% {
    top: 0%;
  }
`;

const shadowBounce = keyframes`
  0% {
    transform: scaleX(1.3);
  }

  20% {
    transform: scaleX(1);
    opacity: 0.6;
  }

  100% {
    transform: scaleX(0.2);
    opacity: 0.3;
  }
`;

export const LoadingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88%;
  height: 210px;
  margin-top: 20px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 140px;
`;

export const Img = styled.img<{ delay: number }>`
  position: relative;
  object-fit: cover;
  top: 70px;
  width: 45px;
  height: 45px;
  transform-origin: center bottom;
  animation: ${({ delay }) => css`
    ${bounce} 0.6s alternate infinite ease ${delay}s;
  `};
  z-index: 1;

  @media (max-width: 390px) {
    width: 42px;
    height: 42px;
  }

  @media (max-width: 375px) {
    width: 38px;
    height: 38px;
  }
`;

export const Shadow = styled.div<{ delay: number }>`
  position: absolute;
  width: 45px;
  height: 6px;
  bottom: 22px;
  opacity: 0;
  filter: blur(1px);
  border-radius: 50%;
  transform-origin: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${({ delay }) => css`
    ${shadowBounce} 0.6s alternate infinite ease ${delay}s;
  `};

  @media (max-width: 390px) {
    width: 42px;
  }

  @media (max-width: 375px) {
    width: 38px;
  }
`;
