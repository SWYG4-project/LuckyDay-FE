import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
`;

export const RowBox = styled.div`
  display: flex;
`;

export const LuckyBallFace = styled.div<{ imageUrl: string }>`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imageUrl});
  cursor: default;
`;

export const svgFrame = (theme: Theme) => css`
  svg {
    width: 100px;
    height: 100px;
    margin: 10px;
    cursor: pointer;
    pointer-events: auto;
    ${theme.fonts.luckyBall2}
  }
`;

export const LuckyBall_unknown = (theme: Theme) => css`
  ${svgFrame(theme)}
  path {
    fill: ${theme.colors.lightOrange};
  }
`;

export const LuckyBall_D3 = (theme: Theme) => css`
  ${svgFrame(theme)}
  path {
    fill: ${theme.colors.orange};
  }
`;

export const LuckyBall_D2 = (theme: Theme) => css`
  ${svgFrame(theme)}
  path {
    fill: ${theme.colors.orange};
  }
`;

export const LuckyBall_D1 = (theme: Theme) => css`
  ${svgFrame(theme)}
  path {
    fill: ${theme.colors.orange};
  }
`;

export const LuckyBall_Dday = (theme: Theme) => css`
  ${svgFrame(theme)}
  path {
    fill: ${theme.colors.purple};
  }
`;
