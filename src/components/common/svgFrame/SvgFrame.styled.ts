import styled from "@emotion/styled";

export const SvgFrame = styled.div`
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));

  svg {
    width: 100%;
    height: 100%;

    path {
      filter: drop-shadow(0px 6px 0px rgba(255, 255, 255, 1));
    }
  }
`;
