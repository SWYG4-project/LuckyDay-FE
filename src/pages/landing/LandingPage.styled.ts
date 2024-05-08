import styled from "@emotion/styled";

export const Landing = styled.div`
  width: 100%;
  height: calc(100vh - 200px); //TODO: 100vh - (header+footer)
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
