import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Logo = styled.div`
  ${() => css`
    width: 35px;
    height: 35px;
    margin: 0px 20px 0px 30px;
    background-size: 35px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("src/assets/logo-01.png");
    cursor: pointer;
  `}
`;
