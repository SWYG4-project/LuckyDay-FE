import React from "react";

import * as S from "./CreateLuckyDayModal.styled";
import { ConfirmModal } from "components";

function CreateLuckyDayModal() {
  const handleClick = () => {
    console.log("CreateLuckyDayModal");
  };

  return (
    <ConfirmModal
      css={S.modal}
      title="럭키 데이를 생성하시겠어요?"
      subTitle={`생성 옵션:\n2024년 06월 01일 ~ 2024년 06월 01일\n14일 동안 2개의 럭키 데이\n\n제외 날짜:\n2024년 06월 04일,\n2024년 06월 05일,`}
      desc={`한 번 제출한 럭키 데이 옵션은 수정할 수 없으며,\n활동과 날짜는 랜덤 배정됩니다.`}
      baseLabel="생성하기"
      handleBaseClick={handleClick}
    />
  );
}

export default CreateLuckyDayModal;
