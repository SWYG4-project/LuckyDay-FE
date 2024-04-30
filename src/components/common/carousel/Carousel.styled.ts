import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
  border-radius: 10px;
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
    white-space: pre-wrap;
  `}
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
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url("src/assets/icon/prev.png");
`;

export const NextButton = styled(Button)`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url("src/assets/icon/next.png");
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
    background-color: ${active ? theme.colors.black : "#ccc"};
  `}
`;
