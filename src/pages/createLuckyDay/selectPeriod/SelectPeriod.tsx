import React, { useState } from "react";

import * as S from "./SelectPeriod.styled";
import dayjs from "dayjs";

function SelectPeriod() {
  const [selectPeriod, setSelectPeriod] = useState(1);

  const periods = [
    { label: "7일", value: 1 },
    { label: "14일", value: 2 },
    { label: "30일", value: 4 },
    { label: "60일", value: 7 },
  ] as const;

  const handleSelectPeriod = (period: string) => () => {
    const selectPeriod = periods.find((item) => item.label === period);

    setSelectPeriod(selectPeriod?.value ?? 1);
  };

  return (
    <>
      <S.HeadLine>
        <span>럭키 데이가 배정될 기간을 선택하세요.</span>
        <S.SubHeadLine>
          {dayjs().format("YYYY년 MM월 DD일")} 오늘로부터...
        </S.SubHeadLine>
      </S.HeadLine>
      <S.PeriodWrapper>
        {periods.map((period) => (
          <S.ActivityButton
            key={period.label}
            onClick={handleSelectPeriod(period.label)}
          >
            <S.Img
              src={
                selectPeriod === period.value
                  ? "images/img_toggle.png"
                  : "images/img_beige_toggle.png"
              }
            />
            <S.ActivityInfo>
              <S.ActivityTitle>{period.label}</S.ActivityTitle>
            </S.ActivityInfo>
          </S.ActivityButton>
        ))}
      </S.PeriodWrapper>
      <S.SelectInfo>
        최대 <strong>{selectPeriod}개</strong>의 럭키 데이를 선택할 수 있어요.
      </S.SelectInfo>
    </>
  );
}

export default SelectPeriod;
