import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const SingleButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
`;

export const Body = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px 50px 24px;
`;

export const svgFrame = (theme: Theme) => css`
  width: 40px;
  height: 40px;

  path {
    fill: ${theme.colors.beige};
  }
`;

export const Button = styled.button`
  position: relative;

  svg:last-of-type {
  }
`;

export const arrowIcon = css`
  position: absolute;
  top: 8px;
  left: 8px;
  rotate: 270deg;
  width: 24px;
  height: 24px;
`;
