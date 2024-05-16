import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const SvgWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

export const svgFrame = (theme: Theme, width: string, height: string) => css`
  svg {
    width: ${width};
    height: ${height};
    margin: 10px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    cursor: pointer;
  }
`;

export const SvgButton =
  (fillColor: string, width: string, height: string, disabled: boolean) =>
  (theme: Theme) =>
    css`
      ${svgFrame(theme, width, height)}
      path {
        fill: ${fillColor};
        ${disabled &&
        css`
          fill: ${theme.colors.gray};
        `}
      }
    `;

export const Text = styled.div<{ color?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.color || props.theme.colors.black};
  ${(props) => props.theme.fonts.headline1}
`;
