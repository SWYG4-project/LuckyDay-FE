import styled from "@emotion/styled";

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  pointer-events: auto;
  label {
    cursor: pointer;
    pointer-events: auto;
  }
`;

export const Text = styled.div<{ color?: string }>`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  color: ${(props) => props.color || props.theme.colors.white};
  ${(props) => props.theme.fonts.luckyBall2}

  @media (max-width: 412px) {
    ${(props) => props.theme.fonts.logo}
  }

  @media (max-width: 375px) {
    ${(props) => props.theme.fonts.body1}
  }
`;
