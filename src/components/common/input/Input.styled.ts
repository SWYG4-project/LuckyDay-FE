import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: blue;
  `}
`;
