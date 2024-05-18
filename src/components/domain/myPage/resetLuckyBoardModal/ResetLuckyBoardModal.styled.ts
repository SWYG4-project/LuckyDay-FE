import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const modal = (theme: Theme) =>
  css`
    div {
      ${theme.fonts.body1};
      p {
        width: 100%;
      }
    }
  `;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
