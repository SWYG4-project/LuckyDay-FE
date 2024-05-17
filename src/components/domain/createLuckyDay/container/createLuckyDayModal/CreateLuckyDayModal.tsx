import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import type { UseFormHandleSubmit, UseFormWatch } from "react-hook-form";

import { ConfirmModal } from "components";
import { useModal } from "hooks";
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
  const navigate = useNavigate();

  const { mutate: createLuckyDayMutate } = useCreateLuckyDay();

  const { handleModalClose } = useModal();

  const EndOfDate = dayjs(dayjs())
    .add(+watch("period"), "day")
    .format("YYYY년 MM월 DD일");

  const handleClick = handleSubmit((data) => {
    const filteredActList = data.actList.filter((item) =>
      data.customActList?.length ? true : item !== 0
    );

    const req = {
      actList: filteredActList,
      customActList: data.customActList,
      period: data.period,
      cnt: data.cnt,
      expDTList: data.expDTList,
    };

    createLuckyDayMutate(req, {
      onSuccess: () => {
        handleModalClose();
        navigate("/luckyBoard");
      },
    });
  });

  const expDatesString = watch("expDTList")
    ?.map((item) => `${item}\n`)
    .join("");

  const expDatesFormatted = expDatesString?.replace(/,/g, "");

  const subTitle = (
    <p>
      생성 옵션:
      <br />
      {dayjs().format("YYYY년 MM월 DD일")}
      <br />~ {EndOfDate}
      <br />
      {<strong>{watch("period")}</strong>}일 동안{" "}
      <strong>{watch("cnt")}</strong>개의 럭키 데이
      <br />
      {expDatesFormatted ? `\n제외 날짜:\n ${expDatesFormatted}` : ""}
    </p>
  );

  return (
    <ConfirmModal
      css={S.modal(!!expDatesFormatted?.length)}
      title="럭키 데이를 생성하시겠어요?"
      subTitle={subTitle}
      desc={`한 번 제출한 럭키 데이 옵션은 수정할 수 없으며,\n활동과 날짜는 랜덤 배정됩니다.`}
      baseLabel="생성하기"
      handleBaseClick={handleClick}
    />
  );
}

export default CreateLuckyDayModal;
