import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { useToast } from "hooks";
import { LUCKYDAY_PERIODS } from "assets";

const useCalendar = (
  dates: string,
  expDates: string[],
  makeExpDates: (dates: string) => void
) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [period, setPeriod] = useState("");
  const [disabled, setDisabled] = useState<string[]>([]);

  const { addToast } = useToast();

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

  while (currentDay.isBefore(currentDate.startOf("day"))) {
    monthsData.push(currentDay.format("YYYY-MM-DD"));
    currentDay = currentDay.add(1, "day");
  }

  const handleMoveToPrevMonth = (): void => {
    setCurrentMonth(dayjs(currentMonth).subtract(1, "month"));
  };
  const handleMoveToNextMonth = (): void => {
    setCurrentMonth(dayjs(currentMonth).add(1, "month"));
  };

  const handleDisabledCheck = (date: dayjs.Dayjs) => (): void => {
    if (!date) return;

    const formattedDate = date.format("YYYY-MM-DD");
    const isAlreadyDisabled = disabled.includes(formattedDate);
    const luckyday = LUCKYDAY_PERIODS.find((item) => item.period === +dates);

    if (!isAlreadyDisabled) {
      if (expDates.length >= (luckyday?.expDate ?? 1))
        return addToast({
          content: `${luckyday?.expDate}일 이상의 제외 날짜를 선택할 수 없어요 :(`,
        });

      if (!monthsData.includes(formattedDate)) return;

      setDisabled([...disabled, formattedDate]);
    } else {
      const currentDate = disabled.filter((item) => item !== formattedDate);

      setDisabled(currentDate);
    }

    makeExpDates(formattedDate);
  };

  useEffect(() => {
    setPeriod(dates);
  }, [dates]);

  return {
    currentMonth,
    monthsData,
    disabled,
    calendarList,
    handleMoveToPrevMonth,
    handleMoveToNextMonth,
    handleDisabledCheck,
  };
};

export default useCalendar;
