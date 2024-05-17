import { css, Theme } from "@emotion/react";

export const modal = (theme: Theme) =>
  css`
    div {
      ${theme.fonts.body1};
      p {
        width: 100%;
      }
    }
  `;
