import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const BaseModal = styled.dialog`
  ${({ theme }) => css`
    position: fixed;
    display: block;
    width: 288px;
    height: 415px;
    margin: 0 auto;
    border: 0;
    border-radius: 24px;
    background-color: ${theme.colors.lightBeige};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1001;
  `}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); // NOTE: 디자인시스템 문의 예정
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
