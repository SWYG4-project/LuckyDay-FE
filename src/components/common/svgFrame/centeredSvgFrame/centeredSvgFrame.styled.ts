import styled from "@emotion/styled";

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Text = styled.div<{ color?: string }>`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  color: ${(props) => props.color || props.theme.colors.black};
  ${(props) => props.theme.fonts.luckyBall2}
`;
