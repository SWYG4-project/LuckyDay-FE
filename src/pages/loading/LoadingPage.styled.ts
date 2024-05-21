import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const LoadingPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  row-gap: 20px;
  overflow: hidden;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    margin-bottom: 20px;
  `}
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Img = styled.img<{ isAnimating: boolean; delay: number }>`
  width: 50px;
  height: 50px;
  object-fit: cover;
  animation: ${({ isAnimating, delay }) =>
    isAnimating &&
    css`
      ${slideDown} 0.5s ease-in-out ${delay}s forwards
    `};
  opacity: 0;
`;
