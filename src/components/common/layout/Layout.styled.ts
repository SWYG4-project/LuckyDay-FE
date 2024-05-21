import styled from "@emotion/styled";

export const Layout = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 추후에 상대좌표로 변경할 수 있음
  background-image: url("/images/background.webp");
  background-size: cover;
  background-position: center;
`;
