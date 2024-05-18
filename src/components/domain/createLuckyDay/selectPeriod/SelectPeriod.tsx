import dayjs from "dayjs";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { SvgFrame } from "components";
import { LongBoxIcon } from "assets";
import type { CreateLuckyDayForm } from "types";
import * as S from "./SelectPeriod.styled";

interface SelectPeriodProps {
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
}

function SelectPeriod({ watch, setValue }: SelectPeriodProps) {
  const periods = [
    { label: "7일", value: 7, cnt: 2 },
    { label: "14일", value: 14, cnt: 2 },
    { label: "30일", value: 30, cnt: 4 },
    { label: "60일", value: 60, cnt: 7 },
  ] as const;

  const selectPeriod = periods.find((item) => item.value === watch("period"));

  const handleSelectPeriod = (period: string) => (): void => {
    const selectPeriod = periods.find((item) => item.label === period);

    setValue("period", selectPeriod?.value ?? 0);

    if (+period !== watch("period")) {
      return setValue("cnt", 1);
    }
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
            <SvgFrame
              css={S.icon(watch("period") === period.value)}
              icon={<LongBoxIcon />}
            />
            <S.ActivityInfo>
              <S.ActivityTitle>{period.label}</S.ActivityTitle>
            </S.ActivityInfo>
          </S.ActivityButton>
        ))}
      </S.PeriodWrapper>
      {!!watch("period") && (
        <S.SelectInfo>
          최대 <strong>{selectPeriod?.cnt}개</strong>의 럭키 데이를 선택할 수
          있어요.
        </S.SelectInfo>
      )}
    </>
  );
}

export default SelectPeriod;
