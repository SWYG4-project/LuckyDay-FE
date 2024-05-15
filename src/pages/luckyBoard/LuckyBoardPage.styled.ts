import { Theme, css } from "@emotion/react";

export const archiveModal = (theme: Theme) => css`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      color: ${theme.colors.orange};
    }
  }
`;
