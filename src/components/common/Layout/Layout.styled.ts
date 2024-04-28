import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Layout = styled.div`
  ${({ theme }) => css`
    width: 430px;
    height: 932px;
    margin: 0 auto;
    border: 10px solid ${theme.colors.purple};
    background-color: ${theme.colors.gray};
  `}
`;
