import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CreateLuckyDay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const icon = css`
  width: 24px;
  height: 24px;
`;

export const prevIcon = css`
  ${icon};
  rotate: 270deg;
`;

export const nextIcon = css`
  ${icon};
  rotate: 90deg;
`;

export const Button = styled.button`
  //TODO: 임시 버튼으로 수정예정
  ${({ theme }) => css`
    position: relative;
    width: 100px;

    & > div {
      ${theme.fonts.body1};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 6px;
      top: 0;
      left: 0;
      right: 0;
      padding: 10px 0;
    }
  `}
`;

export const Img = styled.img`
  width: 100%;
`;
