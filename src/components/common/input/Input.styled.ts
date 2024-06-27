import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.fonts.body1};
    width: 100%;
    border: 1px solid ${theme.colors.lightOrange};
    padding: 5px 10px;
  `}
`;
