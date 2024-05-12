import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const scaleUp = keyframes`
  from { max-height: 0;}
  to {max-height: 100px;}
`;

const scaleDown = keyframes`
  from { max-height: 100px;}
  to { max-height: 0;}
 `;

const fadeIn = keyframes`
from { opacity: 0; transform: translateY(-50%);}
  to { opacity: 1; transform: translateY(0)}
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0)}
  to { opacity: 0; transform: translateY(50%)}
 `;

export const ToastItem = styled.div<{ isClosing: boolean }>`
  ${({ theme, isClosing }) => css`
    max-height: 0;
    overflow: visible;
    animation: 0.8s forwards ${isClosing ? scaleDown : scaleUp};
    animation: 0.3s forwards ${isClosing ? fadeOut : fadeIn};

    div {
      ${theme.fonts.body1};
      width: 360px;
      border-radius: 32px;
      padding: 10px 0;
      color: ${theme.colors.lightBeige};
      background-color: ${theme.colors.black};
      opacity: 0.9;
      text-align: center;
    }
  `}
`;
