import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HomeButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
  `}
  width: 247px;
  height: 45px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-image: url("images/button-long.png");
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  transition: color 0.3s ease;
  // NOTE : 디자이너님과 hover 관련 논의 시 보여드릴 테스트코드입니다.
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
  cursor: pointer;
`;
