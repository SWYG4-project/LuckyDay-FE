import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ProgressBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 44px;
    background-color: ${theme.colors.purple};
  `}
`;
