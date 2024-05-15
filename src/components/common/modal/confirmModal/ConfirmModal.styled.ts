import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const baseModal = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 44px 21px 18px 21px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    display: flex;
    justify-content: center;
    margin-bottom: 11px;
  `}
`;

export const CenterContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 13px;
`;

const svgIcon = css`
  width: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const largeBoxIcon = (theme: Theme) => css`
  ${svgIcon};
  padding: 0 4px;

  path {
    fill: ${theme.colors.lightPurple};
  }
`;

export const beigeIcon = (theme: Theme) => css`
  ${svgIcon};

  path {
    fill: ${theme.colors.beige};
  }
`;

export const purpleIcon = (theme: Theme) => css`
  ${svgIcon};

  path {
    fill: ${theme.colors.purple};
  }
`;

const button = (theme: Theme) => css`
  position: relative;
  width: 100px;

  & > span {
    ${theme.fonts.headline1};
    position: absolute;
    width: 100%;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    ${button(theme)};

    & > span {
      color: ${theme.colors.black};
    }
  `}
`;

export const BaseButton = styled.button`
  ${({ theme }) => css`
    ${button(theme)};

    & > span {
      color: ${theme.colors.white};
    }
  `}
`;

export const SubTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body2};
    position: absolute;
    display: flex;
    width: 100%;
    height: 180px;
    padding: 25px 15px;
    text-align: center;
    white-space: break-spaces;
    overflow-y: scroll;
    -ms-overflow-style: none; /*IE, Edge*/
    scrollbar-width: none; /*Firefox*/

    ::-webkit-scrollbar {
      display: none; /*Chrome, Safari, Opera*/
      width: 0px;
    }
  `}
`;

export const Desc = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body2};
    display: flex;
    justify-content: center;
    text-align: center;
    white-space: break-spaces;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 39px;
  padding: 0 4px;
`;

export const icon = css`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
