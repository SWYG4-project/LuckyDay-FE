import styled from "@emotion/styled";
import { css } from "@emotion/react";

// FIX : button 컴포넌트 개발 이후 변경 예정
export const KakaoLoginButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
    width: 247px;
    height: 45px;
    margin: 20px;
    border: none;
    background-color: transparent;
    background-size: cover;
    background-image: url("images/button-long.png");
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
    cursor: pointer;
  `}
`;
