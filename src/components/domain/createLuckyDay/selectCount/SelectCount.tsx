import React, { useState } from "react";
import dayjs from "dayjs";

import * as S from "./SelectCount.styled";

function SelectCount() {
  const [selectDates, setSelectDates] = useState(1);

  const selectedPeriod = 4; //TODO: 임시데이터

  const handleSelectCounts = (counts: number) => (): void => {
    const currentCount = selectDates + counts;

    if (currentCount <= 0 || currentCount > selectedPeriod)
      return console.log("err");

    setSelectDates(selectDates + counts);
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
          <S.Img src="images/img_small.png" />
          <S.Icon>-</S.Icon>
          {/* TODO: 아이콘 width, height 조절 이슈가 있어 임의로 설정 */}
        </S.SelectDatesButton>
        <S.SelectDatesBox>{selectDates}</S.SelectDatesBox>
        <S.SelectDatesButton onClick={handleSelectCounts(+1)}>
          <S.Img src="images/img_small.png" />
          <S.Icon>+</S.Icon>
          {/* TODO: 아이콘 width, height 조절 이슈가 있어 임의로 설정 */}
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
