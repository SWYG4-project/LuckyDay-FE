import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ActivityButton = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: relative;
    width: ${isOpen ? "382px" : "368px"};
    height: fit-content;

    @media (max-width: 380px) {
      width: ${isOpen ? "328px" : "328px"};
    }
  `}
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActivityBox = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    //NOTE: 피그마와 다르게 적용해야 제 위치에 붙음
    padding: ${isOpen ? "0 27px 0 37px" : "0 20px 0 30px"};

    @media (max-width: 380px) {
      padding: ${isOpen ? "0 17px 0 28px" : "0 10px 0 23px"};
    }
  `}
`;

export const ActivityInfo = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    display: grid;
    grid-template-columns: 35px 1fr 40px;
    column-gap: 15px;
    align-items: center;
    height: fit-content;
    padding: 15px 0 ${isOpen ? "8px" : "18px"} 0; //NOTE: 이미지 간격이 맞지 않아 padding-top 임의 설정함
    text-align: start;
    cursor: pointer;

    & > svg:first-of-type {
      margin: 5px 5px 0 5px;
    }

    @media (max-width: 380px) {
      padding: 9px 0 ${isOpen ? "8px" : "18px"} 0; //NOTE: 이미지 간격이 맞지 않아 padding-top 임의 설정함

      & > svg:first-of-type {
        margin: 5px 5px 0 5px;
      }
    }
  `}
`;

export const ActivityTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};

    @media (max-width: 380px) {
      ${theme.fonts.headline1};
    }
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
  justify-content: flex-start;
  align-items: center;
  column-gap: 14px;
  row-gap: 8px;
  width: 320px;
  flex-wrap: wrap;

  @media (max-width: 380px) {
    width: 290px;
  }
`;

export const Activity = styled.button<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    ${theme.fonts.body1};
    display: flex;
    align-items: center;
    column-gap: 3px;
    border-radius: 30px;
    padding: ${isSelected ? "0 11px 0 6px" : "0 11px"};
    color: ${!isSelected && theme.colors.gray};
    background-color: ${isSelected
      ? theme.colors.lightOrange
      : theme.colors.lightBeige};

    svg {
      display: ${!isSelected && "none"};
    }

    @media (max-width: 380px) {
      ${theme.fonts.body2};
    }
  `}
`;

export const icon = css`
  width: 12px;
  height: 12px;
`;
