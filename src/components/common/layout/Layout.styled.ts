import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 430px;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 추후에 상대좌표로 변경할 수 있음
  background-image: url("/images/background.png");
  background-size: cover;
  background-position: center;
`;
