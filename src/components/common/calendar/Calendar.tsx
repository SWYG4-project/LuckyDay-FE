import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import { ArrowIcon } from "assets";
import * as S from "./Calendar.styled";

interface CalendarProps {
  dates: string;
}

const Calendar = ({ dates }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [period, setPeriod] = useState("");
  const [disabled, setDisabled] = useState<string[]>([]);

  const dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

  const daysInMonth = currentMonth.daysInMonth();
  const firstDayOfMonth = dayjs(currentMonth).startOf("month").locale("ko");
  const currentDate = dayjs(dayjs()).add(+period, "day");
  const existDates = Array.from({ length: daysInMonth }, (_, index) =>
    dayjs(firstDayOfMonth).add(index, "day")
  );
  const emptyDates = new Array(firstDayOfMonth.day()).fill(null);
  const calendarList = [...emptyDates, ...existDates];

  const monthsData: string[] = [];
  let currentDay = dayjs().startOf("day");

  while (currentDay.isSameOrBefore(currentDate.startOf("day"))) {
    monthsData.push(currentDay.format("YYYY-MM-DD"));
    currentDay = currentDay.add(1, "day");
  }

  const movePrevMonth = (): void => {
    setCurrentMonth(dayjs(currentMonth).subtract(1, "month"));
  };
  const moveNextMonth = (): void => {
    setCurrentMonth(dayjs(currentMonth).add(1, "month"));
  };

  const disabledCheck = (date: dayjs.Dayjs) => (): void => {
    if (!date) return;

    const formattedDate = date.format("YYYY-MM-DD");
    const isAlreadyDisabled = disabled.includes(formattedDate);

    if (!isAlreadyDisabled) {
      if (!monthsData.includes(formattedDate)) return;

      setDisabled([...disabled, formattedDate]);
    } else {
      const currentDate = disabled.filter((item) => item !== formattedDate);

      setDisabled(currentDate);
    }
  };

  useEffect(() => {
    setPeriod(dates);
  }, [dates]);

  return (
    <S.Calendar>
      <S.CalendarHeader>
        {dayWeek.map((dayWeek, index) => (
          <div key={index}>{dayWeek}</div>
        ))}
      </S.CalendarHeader>
      <S.dayWeekWrapper>
        {/* TODO: button 컴포넌트 제작 필요 */}
        <S.PrevArrowButton onClick={movePrevMonth}>
          <ArrowIcon />
        </S.PrevArrowButton>
        <S.Month>{currentMonth.format("M")}월</S.Month>
        <S.NextArrowButton onClick={moveNextMonth}>
          <ArrowIcon />
        </S.NextArrowButton>
      </S.dayWeekWrapper>
      <S.CalendarHeader>
        {calendarList.map((date, i) => {
          if (date === null) {
            return <div key={i} />;
          } else {
            const formattedDate = date.format("YYYY-MM-DD");
            const isExceptDate = disabled.includes(formattedDate);

            return (
              <S.DayBtn
                key={i}
                isSelected={monthsData.includes(formattedDate)}
                isExceptDate={isExceptDate}
                isChecked={!monthsData.includes(formattedDate)}
                onClick={disabledCheck(date)}
              >
                {date.format("DD")}
              </S.DayBtn>
            );
          }
        })}
      </S.CalendarHeader>
    </S.Calendar>
  );
};

export default Calendar;
