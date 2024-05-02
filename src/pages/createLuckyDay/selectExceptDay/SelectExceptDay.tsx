import React from "react";

import { Calendar } from "components";
import * as S from "./SelectExecptDay.styled";
import dayjs from "dayjs";

function SelectExceptDay() {
  const selectedPeriod = "30";
  const EndOfDate = dayjs(dayjs())
    .add(+selectedPeriod, "day")
    .format("YYYY년 MM월 DD일");

  return (
    <>
      <S.HeadLine>럭키 데이 배정을 원하지 않는 날짜를 선택하세요.</S.HeadLine>
      <S.SubHeadLine>
        {dayjs().format("YYYY년 MM월 DD일")} ~ {EndOfDate}
      </S.SubHeadLine>
      <div>
        <Calendar dates={selectedPeriod} />
      </div>
    </>
  );
}

export default SelectExceptDay;
