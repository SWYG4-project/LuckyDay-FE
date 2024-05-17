import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  SelectActivity,
  SelectCount,
  SelectPeriod,
  SelectExceptDate,
  ProgressBar,
  ButtonLayout,
  CreateLuckyDayModal,
} from "components";
import { ArrowIcon } from "assets";
import { useModal, useToast } from "hooks";
import type { CreateLuckyDayForm } from "types";
import * as S from "./CreateLuckyDayPage.styled";

function CreateLuckyDayPage() {
  const [currentProgress, setCurrentProgress] = useState(0);

  const { setValue, watch, handleSubmit } = useForm<CreateLuckyDayForm>({
    defaultValues: {
      actList: [],
      customActList: [],
      period: 0,
      cnt: 1,
      expDTList: [],
    },
    mode: "onTouched",
  });

  const { handleOpenModal } = useModal();
  const { addToast } = useToast();

  const changeCurrentProgress = (progress: number) => (): void => {
    const changedProgress = currentProgress + progress;

    if (changedProgress < 0) return addToast({ content: "첫 페이지 입니다." });

    if (changedProgress > 3)
      return addToast({ content: "마지막 페이지 입니다." });

    setCurrentProgress(changedProgress);
  };

  const changePage = (current: number): React.ReactNode => {
    switch (current) {
      case 0:
        return <SelectActivity setValue={setValue} watch={watch} />;
      case 1:
        return <SelectPeriod setValue={setValue} watch={watch} />;
      case 2:
        return <SelectCount setValue={setValue} watch={watch} />;
      case 3:
        return <SelectExceptDate setValue={setValue} watch={watch} />;
    }
  };

  const handleClickNextButton = () => {
    if (currentProgress === 0 && !watch("actList").length) {
      return addToast({ content: "최소 1개의 카테고리를 선택해 주세요." });
    }

    if (currentProgress === 1 && watch("period") === 0) {
      return addToast({ content: "최소 1개의 기간을 선택해 주세요." });
    }

    if (currentProgress !== 3) return changeCurrentProgress(+1)();

    handleOpenModal(
      <CreateLuckyDayModal watch={watch} handleSubmit={handleSubmit} />
    );
  };

  return (
    <ButtonLayout
      variant="hasIcon"
      firstLabel="prev"
      secondLabel="next"
      icon={<ArrowIcon />}
      handleClickFirstButton={changeCurrentProgress(-1)}
      handleClickSecondButton={handleClickNextButton}
    >
      <S.CreateLuckyDay>
        <ProgressBar progressState={currentProgress} />
        {changePage(currentProgress)}
      </S.CreateLuckyDay>
    </ButtonLayout>
  );
}

export default CreateLuckyDayPage;
