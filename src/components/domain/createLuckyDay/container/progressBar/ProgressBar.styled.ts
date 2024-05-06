import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ProgressBar = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    column-gap: 27px;
    width: 100%;
    height: 44px;

    &:not(:last-of-type):after {
      content: "";
      position: absolute;
      display: flex;
      justify-content: center;
      top: 9px;
      width: 200px;
      height: 1px;
      background-color: ${theme.colors.black};
    }
  `}
`;

export const SingleProgress = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body2};
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
  `}
`;

export const ProgressState = styled.div<{ state: boolean }>`
  ${({ theme, state }) => css`
    width: 20px;
    height: 20px;
    color: ${theme.colors.white};
    border-radius: 50%;
    padding-top: 2px; //NOTE: 피그마와 위치가 맞지 않아 임의 추가
    background-color: ${state ? theme.colors.black : theme.colors.gray};
    text-align: center;
    z-index: 2;
  `}
`;
