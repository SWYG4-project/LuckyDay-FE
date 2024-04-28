import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Footer = styled.div`
  ${() => css`
    height: 100px;
    background-color: #fdf3ce; // 후에 삭제 예정
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  `}
`;
