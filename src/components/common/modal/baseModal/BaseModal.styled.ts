import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const BaseModal = styled.dialog`
  ${({ theme }) => css`
    position: relative;
    display: block;
    margin: 0 auto;
    border: 0;
    border-radius: 5px;
    background-color: ${theme.colors.white};
  `}
`;
