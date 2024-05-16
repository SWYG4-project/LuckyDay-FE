import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const ViewLuckyActivityPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  padding: 20px 30px;
`;

export const LuckydayInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 3%;

    span:first-of-type {
      ${theme.fonts.headline1};
    }

    span:last-of-type {
      ${theme.fonts.luckyBall2};
    }
  `}
`;

export const LuckydayDetailInfo = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    svg {
      position: absolute;
      top: 27px;
      left: 50%;
      transform: translateX(-50%);
    }

    p:first-of-type {
      ${theme.fonts.headline1};
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
    }

    p:last-of-type {
      ${theme.fonts.headline2};
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  `}
`;

export const svgFrame = (theme: Theme) => css`
  width: 120px;

  path {
    fill: ${theme.colors.beige};
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;

    & > span {
      ${theme.fonts.headline1};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;
