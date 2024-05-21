import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

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

export const ReviewInput = (theme: Theme) => css`
  width: 270px;
  height: 120px;
  padding: 10px 20px;
  margin-top: 70px;
  margin-bottom: 70px;
  border: 0;
  background-color: transparent;
  text-align: center;
  color: ${theme.colors.black};
  ${theme.fonts.headline2}

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${theme.colors.gray};
    color: ${theme.colors.gray};
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
