import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background-color: ${theme.colors.background};
  `}
`;

export const Layout = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("/images/background.webp");
`;
