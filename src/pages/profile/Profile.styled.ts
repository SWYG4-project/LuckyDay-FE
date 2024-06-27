import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Logo_Basic = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/logo.webp");

  @media (max-width: 375px) {
    margin: 0px;
    width: 120px;
    height: 120px;
    background-size: cover;
  }
`;

interface MailBoxProps {
  isLongEmail: boolean;
}

export const MailBox = styled.div<MailBoxProps>`
  ${({ theme, isLongEmail }) => css`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 20px;
    ${isLongEmail ? theme.fonts.headline2 : theme.fonts.headline1}
    color: ${theme.colors.black};
    background-color: ${theme.colors.beige};
  `}
`;

export const TitleTextBox = styled.div`
  ${({ theme }) => css`
    margin: 20px;
    color: ${theme.colors.black};
    ${theme.fonts.luckyBall1}
  `}
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    padding: 15px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1};

    @media (max-width: 375px) {
      padding: 0px;
    }
  `}
`;

export const ButtonBox = styled.div`
  padding-top: 20px;

  @media (max-width: 375px) {
    padding-top: 0px;
  }
`;
