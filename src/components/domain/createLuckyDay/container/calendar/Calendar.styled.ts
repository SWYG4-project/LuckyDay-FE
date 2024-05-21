import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Calendar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const DayWeekWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 295px;
  z-index: 2;

  @media (max-width: 380px) {
    width: 250px;
  }
`;

export const DayWeekBox = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}
`;

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  & > svg {
    width: 24px;
    height: 24px;
  }
  & > svg:last-of-type {
    position: absolute;
  }
`;

export const PrevArrowButton = styled.button`
  ${button};
  position: relative;
  left: -10px;

  & > svg:last-of-type {
    rotate: 270deg;
  }
`;

export const NextArrowButton = styled.button`
  ${button};
  position: relative;
  right: -10px;

  & > svg:last-of-type {
    rotate: 90deg;
  }
`;

export const Month = styled.h3`
  text-align: center;
`;

export const CalendarBox = styled.div`
  position: relative;
  width: 390px;
  bottom: 25px;
  left: 0;

  @media (max-width: 380px) {
    width: 330px;
  }
`;

export const CalendarHeader = styled.div`
  position: absolute;
  top: 40px;
  left: 32px;
  display: grid;
  grid-template-columns: repeat(7, 35px);
  gap: 7px 13px;
  z-index: 1;

  @media (max-width: 380px) {
    grid-template-columns: repeat(7, 27px);
  }
`;

export const DayWeek = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body1};

    @media (max-width: 380px) {
      ${theme.fonts.body2};
    }
  `}
`;

export const DayButton = styled.button<{
  isSelected: boolean;
  isExceptDate: boolean;
  isChecked: boolean;
}>`
  ${({ isSelected, isExceptDate, isChecked, theme }) => css`
    height: 35px;
    border-radius: 50%;
    border: 0;
    background-color: ${isChecked
      ? "transparent"
      : isExceptDate
      ? theme.colors.lightBeige
      : isSelected && theme.colors.lightOrange};

    @media (max-width: 380px) {
      height: 27px;
    }
  `}
`;

export const svgFrame = css`
  width: 100%;

  svg {
    width: 100%;
    height: fit-content;
  }
`;

export const beigeIcon = (theme: Theme) => css`
  ${svgFrame}
  fill: ${theme.colors.beige};
`;

export const lightbeigeIcon = (theme: Theme) => css`
  ${svgFrame}
  fill: ${theme.colors.lightBeige};
`;
