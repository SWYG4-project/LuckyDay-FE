import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const BaseModal = styled.dialog`
  ${({ theme }) => css`
    position: relative;
    display: block;
    width: 288px;
    height: 415px;
    margin: 0 auto;
    border: 0;
    border-radius: 24px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;
