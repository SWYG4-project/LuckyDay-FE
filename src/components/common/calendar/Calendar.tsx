import { ArrowIcon } from "assets";
import useCalendar from "./hooks/useCalendar";
import * as S from "./Calendar.styled";

interface CalendarProps {
  dates: string;
}

const Calendar = ({ dates }: CalendarProps) => {
  const {
    currentMonth,
    monthsData,
    disabled,
    calendarList,
    handleMoveToPrevMonth,
    handleMoveToNextMonth,
    handleDisabledCheck,
  } = useCalendar(dates);

  const dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

  return (
    <S.Calendar>
      <S.CalendarHeader>
        {dayWeek.map((dayWeek, index) => (
          <div key={index}>{dayWeek}</div>
        ))}
      </S.CalendarHeader>
      <S.DayWeekWrapper>
        {/* TODO: button 컴포넌트 제작 필요 */}
        <S.PrevArrowButton onClick={handleMoveToPrevMonth}>
          <ArrowIcon />
        </S.PrevArrowButton>
        <S.Month>{currentMonth.format("M")}월</S.Month>
        <S.NextArrowButton onClick={handleMoveToNextMonth}>
          <ArrowIcon />
        </S.NextArrowButton>
      </S.DayWeekWrapper>
      <S.CalendarHeader>
        {calendarList.map((date, i) => {
          if (date === null) {
            return <div key={i} />;
          } else {
            const formattedDate = date.format("YYYY-MM-DD");
            const isExceptDate = disabled.includes(formattedDate);

            return (
              <S.DayButton
                key={i}
                isSelected={monthsData.includes(formattedDate)}
                isExceptDate={isExceptDate}
                isChecked={!monthsData.includes(formattedDate)}
                onClick={handleDisabledCheck(date)}
              >
                {date.format("DD")}
              </S.DayButton>
            );
          }
        })}
      </S.CalendarHeader>
    </S.Calendar>
  );
};

export default Calendar;
