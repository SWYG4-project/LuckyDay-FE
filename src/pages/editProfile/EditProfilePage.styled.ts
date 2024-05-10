import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Input as ProfileInput } from "components/common/input";

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const TitleBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 30px;
    margin-bottom: 10px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    border-bottom: 1px  solid ${theme.colors.gray};
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
