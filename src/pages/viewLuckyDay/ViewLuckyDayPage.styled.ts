import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 20px;
  background-color: purple;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 390px;
  margin: 30px 20px 60px 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/img-review.webp");
  background-color: yellow;
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
    margin: 20px 0px 5px 0px;
    text-align: center;
    white-space: pre-wrap;
  `}
`;

export const ImageBox = styled.div`
  width: 200px;
  height: 140px;
  margin-bottom: 80px;
  border-radius: 10px;
  background-color: pink;
`;

export const ReviewText = styled.div`
  ${({ theme }) => css`
    width: 270px;
    height: 120px;
    padding: 10px 20px;
    border: 0;
    background-color: skyblue;
    text-align: center;
    color: ${theme.colors.black};
    ${theme.fonts.headline2}
  `}
`;
