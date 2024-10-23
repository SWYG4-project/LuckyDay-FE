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
    ${theme.fonts.headline2};
    row-gap: 30px;
    width: 100%;
    max-width: 430px;
    max-height: 45%;
    padding: 35px 24px 40px 24px;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24px 24px 0px 0px;
    opacity: ${isVisible ? 1 : 0};
    animation: ${isVisible ? slideUp : ""} 0.3s ease forwards;
    transition: opacity 0.1s ease, transform 0.3s ease;
    background-color: ${theme.colors.lightBeige_opacity};
    filter: none;

    & > div {
      padding-top: ${hasPadding && "15px"};
      text-align: center;
      white-space: break-spaces;
      overflow-y: scroll;
      -ms-overflow-style: none; /*IE, Edge*/
      scrollbar-width: none; /*Firefox*/
    }
  `}
`;

export const ButtonWrapper = styled.div`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    flex: 0 0 auto;
    position: relative;
    width: 110px;
    height: 48px;
    margin: 0 5px;

    & > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${theme.fonts.headline2};
      color: ${theme.colors.black};
      white-space: nowrap;
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
    width: 75px;
    height: 75px;

    @media (max-width: 412px) {
      width: 72px;
      height: 72px;
    }

    @media (max-width: 405px) {
      width: 68px;
      height: 68px;
    }

    & > div {
      width: 100%;
      height: 100%;
    }

    & > span {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${theme.fonts.headline2};
      color: ${theme.colors.white};
    }
  `}
`;

export const BasicSvgFrame = (theme: Theme) => css`
  path {
    fill: ${theme.colors.beige};
  }
`;

export const PurpleSvgFrame = (theme: Theme) => css`
  path {
    fill: ${theme.colors.purple};
  }
  & + span {
    color: ${theme.colors.white};
  }
`;

export const Img = styled.img`
  width: 100px;
`;
