import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 25px 25px 20px;
  overflow-y: auto;
`;

export const TitleBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    padding: 30px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    border-top: 1px  solid ${theme.colors.gray};
  `}
`;

export const MenuBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3px;
    margin-bottom: 15px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    border-bottom: 1px solid ${theme.colors.gray};
    transition: color 0.2s ease;
    /* &:hover {
      color: ${theme.colors.orange};
    } */
    /* cursor: pointer; */
  `}
`;

export const JobBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.orange};
    ${theme.fonts.headline2};
  `}margin: 0px 5px 0px 5px;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  margin: 13px;
`;

export const EmailBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline2}
  `}
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    ${theme.fonts.body2}
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
