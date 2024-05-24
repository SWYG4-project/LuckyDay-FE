import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 80px);
  height: calc(100svh - 80px);
`;

export const Body = styled.div`
  overflow: auto; //NOTE: 스크롤 기능/디자인 확인 필요
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 5% 8% 5%;
`;

export const icon = css`
  width: 24px;
  height: 24px;
`;

export const Button = styled.button<{ variant?: "hasIcon" | "hasColor" }>`
  ${({ variant }) => css`
    position: relative;
    width: ${variant === "hasColor" ? "120px" : "100px"};
  `}
`;

export const ButtonBox = styled.div<{
  isSecond?: boolean;
  variant: "hasIcon" | "hasColor";
}>`
  ${({ theme, isSecond, variant }) => css`
    ${theme.fonts.headline1};
    position: absolute;
    top: ${variant === "hasColor" && !isSecond ? "12px" : "9px"};
    left: ${variant === "hasColor"
      ? isSecond
        ? "28px"
        : "13px"
      : isSecond
      ? "21px"
      : "10px"};
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6px;

    & > svg {
      ${icon};
      rotate: ${isSecond ? "90deg" : "270deg"};
    }
  `}
`;

export const Img = styled.img`
  width: 100%;
`;

export const beigeIcon = (theme: Theme) => css`
  path {
    fill: ${theme.colors.beige};
  }
`;

export const switchIcon = (hasIcon: boolean) => (theme: Theme) =>
  css`
    path {
      fill: ${hasIcon ? theme.colors.beige : theme.colors.lightOrange};
    }
  `;
