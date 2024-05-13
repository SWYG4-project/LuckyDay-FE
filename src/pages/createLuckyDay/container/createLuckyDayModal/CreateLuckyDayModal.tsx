import React from "react";
import dayjs from "dayjs";
import type { UseFormHandleSubmit, UseFormWatch } from "react-hook-form";

import { ConfirmModal } from "components";
import { useCreateLuckyDay } from "services";
import type { CreateLuckyDayForm } from "types";
import * as S from "./CreateLuckyDayModal.styled";

interface CreateLuckyDayModalProps {
  watch: UseFormWatch<CreateLuckyDayForm>;
  handleSubmit: UseFormHandleSubmit<CreateLuckyDayForm>;
}

function CreateLuckyDayModal({
  watch,
  handleSubmit,
}: CreateLuckyDayModalProps) {
  const { mutate: createLuckyDayMutate } = useCreateLuckyDay();

  const EndOfDate = dayjs(dayjs())
    .add(+watch("period"), "day")
    .format("YYYY년 MM월 DD일");

  const handleClick = handleSubmit((data) => {
    const req = {
      actList: data.actList,
      ...(data.customActList?.length && { customActList: data.customActList }),
      period: data.period,
      cnt: data.cnt,
      ...(data.expDTList?.length && { expDTList: data.expDTList }),
    };

    createLuckyDayMutate(req);
  });

  const expDatesString = watch("expDTList")
    ?.map((item) => `${item}\n`)
    .join("");

  const expDatesFormatted = expDatesString?.replace(/,/g, "");

  return (
    <ConfirmModal
      css={S.modal}
      title="럭키 데이를 생성하시겠어요?"
      subTitle={`생성 옵션:\n${dayjs().format(
        "YYYY년 MM월 DD일"
      )} ~ ${EndOfDate}\n${watch("period")}일 동안 ${watch(
        "cnt"
      )}개의 럭키 데이\n${
        expDatesFormatted ? `\n제외 날짜:\n ${expDatesFormatted}` : ""
      }`}
      desc={`한 번 제출한 럭키 데이 옵션은 수정할 수 없으며,\n활동과 날짜는 랜덤 배정됩니다.`}
      baseLabel="생성하기"
      handleBaseClick={handleClick}
    />
  );
}

export default CreateLuckyDayModal;
