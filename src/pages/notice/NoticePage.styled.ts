import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
`;

export const TitleBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    padding: 30px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    border-top: 1px  solid ${theme.colors.gray};
  `}
`;

export const MenuBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    padding: 5px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    border-bottom: 1px solid ${theme.colors.gray};
    transition: color 0.2s ease;
    /* &:hover {
      color: ${theme.colors.orange};
    } */
    /* cursor: pointer; */
  `}
`;

export const DateBox = styled.div`
  ${({ theme }) => css`
    padding-top: 8px;
    color: ${theme.colors.gray};
    ${theme.fonts.body2}
  `}
`;
