import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.lightBeige};
    padding: 5px;
  `}
`;
