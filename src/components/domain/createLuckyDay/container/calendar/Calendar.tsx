import { SvgFrame } from "components";
import { ArrowIcon, CircleBoxIcon, LargeBoxIcon, LongBoxIcon } from "assets";
import useCalendar from "./hooks/useCalendar";
import * as S from "./Calendar.styled";

interface CalendarProps {
  dates: string;
  expDates: string[];
  makeExpDates: (dates: string) => void;
}

const Calendar = ({ dates, expDates, makeExpDates }: CalendarProps) => {
  const {
    currentMonth,
    monthsData,
    disabled,
    calendarList,
    handleMoveToPrevMonth,
    handleMoveToNextMonth,
    handleDisabledCheck,
  } = useCalendar(dates, expDates, makeExpDates);

  const dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

  return (
    <S.Calendar>
      <S.DayWeekWrapper>
        <SvgFrame css={S.beigeIcon} icon={<LongBoxIcon />} />
        <S.DayWeekBox>
          <S.PrevArrowButton onClick={handleMoveToPrevMonth}>
            <SvgFrame css={S.lightbeigeIcon} icon={<CircleBoxIcon />} />
            <ArrowIcon />
          </S.PrevArrowButton>
          <S.Month>{currentMonth.format("M")}월</S.Month>
          <S.NextArrowButton onClick={handleMoveToNextMonth}>
            <SvgFrame css={S.lightbeigeIcon} icon={<CircleBoxIcon />} />
            <ArrowIcon />
          </S.NextArrowButton>
        </S.DayWeekBox>
      </S.DayWeekWrapper>
      <S.CalendarBox>
        <SvgFrame css={S.largeBeigeIcon} icon={<LargeBoxIcon />} />
        <S.CalendarHeader>
          {dayWeek.map((dayWeek, index) => (
            <S.DayWeek key={index}>{dayWeek}</S.DayWeek>
          ))}
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
      </S.CalendarBox>
    </S.Calendar>
  );
};

export default Calendar;
