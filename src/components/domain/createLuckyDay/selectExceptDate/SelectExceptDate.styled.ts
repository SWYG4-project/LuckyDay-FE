import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeadLine = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    margin: 36px 0 7px;
  `}
`;

export const SubHeadLine = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline2};
    margin-bottom: 20px;
  `}
`;

export const ActivityButton = styled.button`
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActivityInfo = styled.div`
  position: absolute;
  top: -5px; //NOTE: 피그마 디자인과 상이하게 나옴 확인 필요
  right: 0;
  display: grid;
  grid-template-columns: 35px 1fr 40px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px 20px 15px 30px;

  & > svg:first-of-type {
    margin: 5.5px;
  }
`;

export const ActivityTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
  `}
`;

export const arrowIcon = css`
  width: 40px;
  height: 40px;
  rotate: 180deg;
`;

export const SelectInfo = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.body1};
    text-align: center;

    & > strong {
      color: ${theme.colors.orange};
    }
  `}
`;
