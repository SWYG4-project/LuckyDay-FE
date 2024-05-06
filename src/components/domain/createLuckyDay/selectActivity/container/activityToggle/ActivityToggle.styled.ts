import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeadLine = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    margin: 46px 0 39px;
  `}
`;

export const ActivityButton = styled.button`
  position: relative;
  width: 368px;
  height: fit-content;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActivityBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding: 0 20px 0 30px;
`;

export const ActivityInfo = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 40px;
  column-gap: 15px;
  align-items: center;
  height: fit-content;
  padding: 15px 0 18px 0; //NOTE: 이미지 간격이 맞지 않아 padding-top 임의 설정함
  text-align: start;

  & > svg:first-of-type {
    margin: 0 5px;
  }
`;

export const ActivityTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
  `}
`;

export const arrowIcon = (isOpen: boolean) =>
  css`
    width: 40px;
    height: 40px;
    rotate: ${isOpen ? "0deg" : "180deg"};
  `;

export const Activities = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

export const Activity = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body1};
    display: flex;
    align-items: center;
    column-gap: 3px;
    border-radius: 30px;
    padding: 0 11px 0 6px;
    background-color: ${theme.colors.lightOrange};
  `}
`;

export const icon = css`
  width: 12px;
  height: 12px;
`;
