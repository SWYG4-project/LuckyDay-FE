import styled from "@emotion/styled";

export const Landing = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: calc(100vh - 80px);
  z-index: 1;

  @media (min-height: 670px) {
    min-height: calc(var(--vh, 1vh) * 100 - 80px);
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
