import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const HeadLine = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    margin: 46px 0 37px;
  `}
`;

export const SubHeadLine = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline2};

    & > strong {
      color: ${theme.colors.orange};
    }
  `}
`;

export const SelectDatesWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
  width: 100%;
  margin: 128px 0 250px;
  //TODO: 간격 맞추기 위해 margin 추가 -> layout 확정 후 수정 예정
`;

export const SelectDatesBox = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background-color: ${theme.colors.beige};
  `}
`;

export const icon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
`;

export const svgFrame = (theme: Theme) => css`
  width: 100%;

  svg {
    width: 100%;

    path {
      fill: ${theme.colors.lightOrange};
    }
  }
`;

export const SelectDatesButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    position: absolute;
    width: 24px;
    height: 24px;
  `}
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
