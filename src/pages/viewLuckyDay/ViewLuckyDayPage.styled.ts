import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 8%;
`;

export const ReviewBox = styled.div`
  aspect-ratio: 370 / 390;
  max-width: 370px;
  width: 100%;
  margin: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/img-review.webp");

  @media (max-width: 390px) {
    max-width: 350px;
    margin: 24px;
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const DefaultImage = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 120px;

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

export const SpinnerBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -120px;
    background-color: ${theme.colors.lightBeige};
  `}
`;
