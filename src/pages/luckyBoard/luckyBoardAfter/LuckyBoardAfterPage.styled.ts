import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  @media (min-height: 1024px) {
    min-height: 80vh;
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
    margin: 10px 0px 5px 0px;
    text-align: center;
    white-space: pre-wrap;

    @media (max-width: 375px) {
      margin: 0px;
    }
  `}
`;

export const LuckyMachine = styled.div`
  position: relative;
  max-width: 430px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/machine-filled.webp");

  &::before {
    content: "";
    display: block;
    padding-top: calc(625 / 430 * 100%);
  }

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }

  @media (max-width: 412px) {
    width: 400px;
  }

  @media (max-width: 390px) {
    width: 375px;
  }

  @media (max-width: 375px) {
    width: 320px;
  }
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
