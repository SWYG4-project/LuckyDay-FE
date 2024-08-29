import { Theme, css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const slideUp = keyframes`
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
`;

export const ArchiveModal = styled.div<{
  hasPadding: boolean;
  isVisible: boolean;
}>`
  ${({ theme, hasPadding, isVisible }) => css`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${theme.fonts.headline1};
    row-gap: 30px;
    width: 100%;
    max-width: 430px;
    max-height: 45%;
    padding: 34px 24px 40px 24px;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24px 24px 0px 0px;
    opacity: ${isVisible ? 1 : 0};
    transition: opacity 0.1s ease, transform 0.3s ease;
    animation: ${isVisible ? slideUp : ""} 0.3s ease forwards;
    background-color: ${theme.colors.lightBeige_opacity};
    filter: none;

    @media (max-width: 375px) {
      ${theme.fonts.headline2};
    }

    & > div {
      padding-top: ${hasPadding && "35px"};
      text-align: center;
      white-space: break-spaces;
      overflow-y: scroll;
      -ms-overflow-style: none; /*IE, Edge*/
      scrollbar-width: none; /*Firefox*/
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    width: 100px;

    & > span {
      ${theme.fonts.headline1};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${theme.colors.black};
    }
  `}
`;

export const LuckyDayButtonWrapper = styled.div`
  display: grid !important;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px 20px;
  width: 100%;
`;

export const LuckyDayButton = styled.button`
  ${({ theme }) => css`
    position: relative;
    width: 80px;
    height: 80px;

    @media (max-width: 412px) {
      width: 75px;
      height: 75px;
    }

    @media (max-width: 405px) {
      width: 70px;
      height: 70px;
    }

    & > div {
      width: 100%;
      height: 100%;
    }

    & > span {
      ${theme.fonts.headline1};
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${theme.colors.white};

      @media (max-width: 412px) {
        ${theme.fonts.headline2};
      }
    }
  `}
`;

export const svgFrame = (theme: Theme) => css`
  path {
    fill: ${theme.colors.purple};
  }
`;

export const svgFrameButton = (theme: Theme) => css`
  path {
    fill: ${theme.colors.beige};
  }
`;

export const Img = styled.img`
  width: 100px;
`;
