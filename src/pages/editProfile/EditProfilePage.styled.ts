import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Input as ProfileInput } from "components/common/input";

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;

  @media (min-height: 1024px) {
    min-height: 70vh;
  }
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

export const ProfileBox = styled.dialog`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
    height: 415px;
    padding-top: 30px;
    margin: 0 auto;
    border: 0;
    border-radius: 24px;
    background-color: ${theme.colors.lightBeige};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;

export const StyledInput = styled(ProfileInput)`
  ${({ theme }) => css`
    width: 248px;
    height: 40px;
    padding: 8px 25px;
    border: 0;
    border-radius: 20px;
    background-color: ${theme.colors.beige};
    color: ${theme.colors.black};
    ${theme.fonts.headline2}

    &:focus {
      outline: 2px solid ${theme.colors.purple};
    }

    &:disabled {
      background-color: ${theme.colors.gray};
      color: ${theme.colors.gray};
    }
  `}
`;

export const Text_h1 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
  `}
`;

export const Text_h2 = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30px 10px 5px 25px;
    color: ${theme.colors.purple};
    ${theme.fonts.headline2}
  `}
`;

export const Text_h3 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    color: ${theme.colors.black};
    ${theme.fonts.body2}
  `}
`;

export const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 248px;
`;

export const ErrorText = styled.p`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    color: ${theme.colors.black};
    ${theme.fonts.body2}
  `}
`;

export const ButtonBox = styled.div`
  margin-top: 80px;
`;
