import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
    margin: 20px 0px 5px 0px;
    text-align: center;
    white-space: pre-wrap;
  `}
`;

export const LuckyMachine = styled.div`
  width: 430px;
  height: 630px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: url("images/machine-filled.png");
`;

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
