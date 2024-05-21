import styled from "@emotion/styled";

export const Toast = styled.div`
  position: fixed;
  top: 95px;
  left: 50%;
  height: max-content;
  min-height: 40px;
  pointer-events: none;
  transform: translateX(-50%);
  z-index: 100;

  & > div:not(:first-of-type) {
    margin-top: 50px;
  }
`;
