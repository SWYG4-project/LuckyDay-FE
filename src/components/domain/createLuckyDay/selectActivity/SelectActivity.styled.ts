import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeadLine = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    margin: 36px 0 29px;
  `}
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
