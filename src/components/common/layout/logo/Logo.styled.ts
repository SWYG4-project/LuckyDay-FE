import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const LogoBox = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.logo};
  `}
`;

export const Logo_Basic = styled.div`
  width: 35px;
  height: 35px;
  margin: 0px 10px 0px 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("images/logo.webp");
  cursor: pointer;
`;
