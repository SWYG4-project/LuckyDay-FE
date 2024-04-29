import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Landing = styled.div`
  ${() => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  `}
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const TextBox = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
`;

export const ImageBox = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
  font-size: 25px;
  background-color: lightgray;
`;
