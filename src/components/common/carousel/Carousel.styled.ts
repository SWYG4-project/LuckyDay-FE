import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

interface SlideProps {
  active: boolean;
}

export const Slide = styled.div<SlideProps>`
  display: ${({ active }) => (active ? "block" : "none")};
  transition: opacity 0.5s ease;

  img {
    width: 340px;
    /* object-fit: cover; */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 20px 0px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const PrevButton = styled(Button)`
  ${() => css`
    width: 40px;
    height: 40px;
    background-size: cover;
    background-image: url("src/assets/icon/prev.png");
  `}
`;

export const NextButton = styled(Button)`
  ${() => css`
    width: 40px;
    height: 40px;
    background-size: cover;
    background-image: url("src/assets/icon/next.png");
  `}
`;
