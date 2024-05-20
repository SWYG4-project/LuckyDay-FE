import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 50px 20px 20px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo_Basic = styled.div`
  width: 100px;
  height: 100px;
  margin: 30px 0px 15px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("images/logo-basic.webp");
`;

export const Text_h1 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
  `}
`;

export const Text_h2 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline2};
    margin: 20px 0px 30px 0px;
  `}
`;

export const Email = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.orange};
    ${theme.fonts.headline2};
    display: inline;
  `}
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
