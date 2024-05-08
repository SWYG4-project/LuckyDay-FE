import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const baseModal = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 35px 26px 35px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `}
`;

export const CenterContent = styled.div`
  position: relative;
  display: flex;
  width: 218px;
  margin-bottom: 20px;

  & > img {
    width: 100%;
  }
`;

export const SubTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body2};
    position: absolute;
    display: flex;
    padding: 35px 25px;
    text-align: center;
    white-space: break-spaces;
  `}
`;

export const Desc = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body2};
    display: flex;
    justify-content: center;
    text-align: center;
    white-space: break-spaces;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 39px;
  margin-top: 21px;
`;

export const icon = css`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
