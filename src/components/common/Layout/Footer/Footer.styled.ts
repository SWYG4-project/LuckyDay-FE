import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.gray};
    padding: 5px;
  `}
`;
