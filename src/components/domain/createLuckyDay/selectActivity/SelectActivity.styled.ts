import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeadLine = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    margin: 46px 0 39px;
  `}
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
