import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const Slide = styled.div`
  position: relative;
  display: block;
`;

export const Image = styled.img`
  width: 340px;
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.logo};
    text-align: center;
    margin: 20px 0px 20px 0px;
    white-space: pre-wrap;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 20px 0px;
`;

export const button = css`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-color: transparent;
  background-image: url("images/img_empty_beige.png");
  border: none;
  cursor: pointer;
  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export const PrevButton = styled.button`
  ${button};
`;

export const PrevArrowIcon = css`
  rotate: 270deg;
`;

export const NextButton = styled.button`
  ${button};
`;

export const NextArrowIcon = css`
  rotate: 90deg;
`;

export const DotContainer = styled.ul`
  width: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`;

interface DotProps {
  active: boolean;
}

export const Dot = styled.li<DotProps>`
  ${({ theme, active }) => css`
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${active ? theme.colors.black : theme.colors.gray};
  `}
`;
