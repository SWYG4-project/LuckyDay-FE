import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Layout = styled.div`
  ${() => css`
    width: 430px;
    height: 932px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // 추후에 상대좌표로 변경할 수 있음
    background-image: url("src/assets/background.png");
    background-size: cover;
    background-position: center;
  `}
`;
