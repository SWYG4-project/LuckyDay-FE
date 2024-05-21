import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface SlideProps {
  active: boolean;
}

export const Slide = styled.div<SlideProps>`
  display: ${({ active }) => (active ? "block" : "none")};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 414px;

  @media (max-width: 380px) {
    height: 314px;
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    width: 310px;
    margin: 5% 0px;
    text-align: center;
    white-space: pre-wrap;
    color: ${theme.colors.black};
    ${theme.fonts.logo};
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 8% 0px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
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
  margin: 10px 0;
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
