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

export const ReviewTextarea = styled.textarea`
  width: 270px;
  height: 100px;
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 70px;
  border: 0;
  background-color: transparent;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.headline2};
  resize: none;
  overflow-y: auto;
  white-space: pre-wrap;
  &:focus {
    outline: none;
  }
`;

export const ImageUploadBox = styled.div`
  width: 200px;
  margin-top: 20px;
  position: relative;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  top: -20px;
  left: 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  background-color: yellow;
`;

export const ErrorText = styled.p`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 20px;
    color: ${theme.colors.black};
    ${theme.fonts.body2}
  `}
`;
