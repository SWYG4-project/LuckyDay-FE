import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 360px;
  width: 450px;
  padding: 23px;
  background-size: contain;
  background: url("public/empty.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const DayWeekWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`;

export const button = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: transparent;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export const PrevArrowButton = styled.button`
  ${button};
  left: -30px;
  rotate: 270deg;
`;

export const NextArrowButton = styled.button`
  ${button};
  right: -30px;
  rotate: 90deg;
`;

export const Month = styled.h3`
  padding-left: 25px;
`;

export const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 35px);
  gap: 13px 7px;
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
  `}
`;
