import { Theme, css } from "@emotion/react";

export const modal = (hasExpDates: boolean) => (theme: Theme) =>
  css`
    div:not(:first-of-type) {
      ${theme.fonts.body1};
      align-items: ${!hasExpDates && "center"};

      p {
        width: 100%;
      }
      strong {
        color: ${theme.colors.orange};
      }
    }
  `;
