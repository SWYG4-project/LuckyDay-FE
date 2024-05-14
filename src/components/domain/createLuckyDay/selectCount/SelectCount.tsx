import React, { useState } from "react";
import dayjs from "dayjs";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { SvgFrame } from "components";
import { useToast } from "hooks";
import { CircleBoxIcon, MinusIcon, PlusIcon } from "assets";
import type { CreateLuckyDayForm } from "types";
import * as S from "./SelectCount.styled";

interface SelectCountProps {
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
}

function SelectCount({ watch, setValue }: SelectCountProps) {
  const [selectDates, setSelectDates] = useState(1);

  const { addToast } = useToast();

  const counts = [
    { period: 7, value: 1 },
    { period: 14, value: 2 },
    { period: 30, value: 4 },
    { period: 60, value: 7 },
  ] as const;

  const selectedPeriod =
    counts.find((item) => item.period === watch("period"))?.value ?? 0;

  const handleSelectCounts = (count: number) => (): void => {
    const currentCount = selectDates + count;

    if (currentCount <= 0)
      return addToast({ content: `1개 이상의 개수를 선택해주세요` });
    if (currentCount > selectedPeriod)
      return addToast({ content: `${selectedPeriod}개 이내로 선택해주세요` });

    setSelectDates(selectDates + count);
    setValue("cnt", selectDates);
  };

  return (
    <>
      <S.HeadLine>
        <span>배정을 원하는 럭키 데이 개수를 선택하세요.</span>
        <S.SubHeadLine>
          {dayjs().format("YYYY년 MM월 DD일")} 오늘로부터{" "}
          <strong>{selectedPeriod}일</strong>
          동안
        </S.SubHeadLine>
      </S.HeadLine>
      <S.SelectDatesWrapper>
        <S.SelectDatesButton onClick={handleSelectCounts(-1)}>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <MinusIcon css={S.icon} />
        </S.SelectDatesButton>
        <S.SelectDatesBox>{selectDates}</S.SelectDatesBox>
        <S.SelectDatesButton onClick={handleSelectCounts(+1)}>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <PlusIcon css={S.icon} />
        </S.SelectDatesButton>
      </S.SelectDatesWrapper>
      {!!selectedPeriod && (
        <S.SelectInfo>
          최대 <strong>{selectedPeriod}개</strong>의 럭키 데이를 선택할 수
          있어요.
        </S.SelectInfo>
      )}
    </>
  );
}

export default SelectCount;
