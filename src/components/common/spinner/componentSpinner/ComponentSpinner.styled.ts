import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const SpinnerAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const ComponentSpinnerContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    padding: 30px;
    border-radius: 20px;
    background-color: ${theme.colors.lightBeige};
  `}
`;

export const ComponentSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0.8px;
  background: conic-gradient(#0000 10%, #ffb43e) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 6.4px),
      #000 calc(100% - 6.4px)
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: ${SpinnerAnimation} 0.8s infinite steps(10);
`;
