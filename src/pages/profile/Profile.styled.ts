import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  width: 100%;
  /* height: 100vh; */
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Logo_Basic = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px 0px 30px 0px;
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("images/logo-basic.png");
`;

export const Text_h1 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightOrange};
    ${theme.fonts.luckyBall1}
  `}
`;

export const Text_h2 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
  `}
  padding: 20px;
`;
