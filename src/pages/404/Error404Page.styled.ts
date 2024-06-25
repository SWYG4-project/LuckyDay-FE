import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const NotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Logo_Sad = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/logo-sad.webp");

  @media (max-width: 375px) {
    width: 120px;
    height: 120px;
    background-size: cover;
  }
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

    @media (max-width: 375px) {
      ${theme.fonts.luckyBall2}
    }
  `}
  padding: 20px;
`;

export const Text_Detail = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    margin-bottom: 30px;

    @media (max-width: 383px) {
      ${theme.fonts.headline2}
    }
  `}
  padding: 20px;
`;
