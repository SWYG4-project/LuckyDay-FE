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
`;

export const ReviewBox = styled.div`
  aspect-ratio: 370 / 390;
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 20px 40px 20px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/img-review.webp");
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;

export const Image = styled.div`
  width: 200px;
  height: 140px;
  margin-top: 5px;
  margin-bottom: 100px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DefaultImage = styled.div`
  width: 90px;
  height: 90px;
  margin-top: 20px;
  margin-bottom: 140px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ReviewTextBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 270px;
    height: 120px;
    margin-top: -50px;
    padding: 10px 20px;
    color: ${theme.colors.black};
    ${theme.fonts.headline2}
    word-break: break-word;
    white-space: pre-wrap;
  `}
`;
