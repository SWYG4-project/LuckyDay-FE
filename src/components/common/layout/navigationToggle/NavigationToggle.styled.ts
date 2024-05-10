import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MenuIcon = styled.div`
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  & > svg {
    width: 40px;
    height: 40px;
  }
`;

export const ToggleBox = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 400px;
  border-radius: 15px 0px 0px 15px;
  box-shadow: -4px 4px 4px 0px #00000040;
  background-size: cover;
  background-position: center;
  background-image: url("/images/background.png");
  z-index: 3;
`;

export const ToggleContentsBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 40px 20px 40px 20px;
    color: ${theme.colors.black};
    ${theme.fonts.logo};
  `}
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  background-size: cover;
  background-position: center;
  background-image: url("/images/profile/profile-03.png");
`;

export const ToggleMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 5px 20px 5px;
`;

export const ToggleMenuBottom = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    color: ${theme.colors.black};
    transition: color 0.2s ease;
    &:hover {
      color: ${theme.colors.lightOrange};
    }
    cursor: pointer;
  `}
`;

export const ToggleMenu = styled(ToggleMenuBottom)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`;
