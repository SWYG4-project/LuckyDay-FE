import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  width: 100%;
  /* height: 100vh; */
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const Logo_Basic = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px 0px 30px 0px;
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("images/logo.webp");
`;

export const MailBox = styled.div`
  ${({ theme }) => css`
    width: 382px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 20px;
    ${theme.fonts.headline1}
    color: ${theme.colors.black};
    background-color: ${theme.colors.beige};
  `}
`;

export const TitleTextBox = styled.div`
  margin: 20px;
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.luckyBall1}
  `}
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
    padding: 20px;
  `}
`;

export const ButtonBox = styled.div`
  position: fixed;
  bottom: 7rem;
`;
