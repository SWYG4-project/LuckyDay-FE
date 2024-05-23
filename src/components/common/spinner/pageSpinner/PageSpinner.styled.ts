import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const SpinnerAnimation = keyframes`
  to {
    transform: rotate(.5turn);
  }
`;

export const PageSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

export const PageSpinner = styled.div`
  width: 56px;
  height: 56px;
  --c: radial-gradient(farthest-side, #ffb43e 92%, #0000);
  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 13.4px 13.4px;
  background-repeat: no-repeat;
  animation: ${SpinnerAnimation} 0.6s infinite;
`;
