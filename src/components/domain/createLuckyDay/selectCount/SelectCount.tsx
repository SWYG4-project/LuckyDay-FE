import dayjs from "dayjs";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { SvgFrame } from "components";
import { useToast } from "hooks";
import { CircleBoxIcon, LUCKYDAY_PERIODS, MinusIcon, PlusIcon } from "assets";
import type { CreateLuckyDayForm } from "types";
import * as S from "./SelectCount.styled";

interface SelectCountProps {
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
}

function SelectCount({ watch, setValue }: SelectCountProps) {
  const { addToast } = useToast();

  const selectedPeriod = LUCKYDAY_PERIODS.find(
    (item) => item.period === watch("period")
  );

  const handleSelectCounts = (count: number) => (): void => {
    const currentCount = watch("cnt") + count;

    if (currentCount <= 0)
      return addToast({ content: `1일 이상의 개수를 선택해주세요` });
    if (currentCount > (selectedPeriod?.cnt ?? 0))
      return addToast({
        content: `${selectedPeriod?.cnt ?? 0}일 이내로 선택해주세요`,
      });

    setValue("cnt", watch("cnt") + count);
  };

  return (
    <>
      <S.HeadLine>
        <span>배정을 원하는 럭키 데이 개수를 선택하세요.</span>
        <S.SubHeadLine>
          {dayjs().format("YYYY년 MM월 DD일")} 오늘로부터{" "}
          <strong>{selectedPeriod?.period ?? 0}일</strong>
          동안
        </S.SubHeadLine>
      </S.HeadLine>
      <S.SelectDatesWrapper>
        <S.SelectDatesButton onClick={handleSelectCounts(-1)}>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <MinusIcon css={S.icon} />
        </S.SelectDatesButton>
        <S.SelectDatesBox>{watch("cnt")}</S.SelectDatesBox>
        <S.SelectDatesButton onClick={handleSelectCounts(+1)}>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <PlusIcon css={S.icon} />
        </S.SelectDatesButton>
      </S.SelectDatesWrapper>
      {!!selectedPeriod && (
        <S.SelectInfo>
          최대 <strong>{selectedPeriod?.cnt ?? 0}개</strong>의 럭키 데이를
          선택할 수 있어요.
        </S.SelectInfo>
      )}
    </>
  );
}

export default SelectCount;
