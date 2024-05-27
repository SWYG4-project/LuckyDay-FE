import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const NotFound = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Logo_Sad = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px 0px 100px 0px;
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/logo-sad.webp");
`;

export const Text_404 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightOrange};
    ${theme.fonts.luckyBall1}
  `}
`;

export const Text_NotFound = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.luckyBall1}
  `}
  padding: 20px;
`;

export const Text_Detail = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
  `}
  padding: 20px;
`;
