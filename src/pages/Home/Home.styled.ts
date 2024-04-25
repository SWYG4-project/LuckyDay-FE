import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Home = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 5vh;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background-color: ${theme.colors.orange};
  `}
`;

export const menuIcon = (theme: Theme) => css`
  path {
    fill: ${theme.colors.lightBeige};
  }
`;
