import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
`;

export const Body = styled.div`
  overflow: auto; //NOTE: 스크롤 기능/디자인 확인 필요
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px 50px 24px;
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
