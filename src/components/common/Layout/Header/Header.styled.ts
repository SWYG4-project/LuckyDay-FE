import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const LogoText = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.logo};
  `}
`;
