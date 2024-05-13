import React, { useState } from "react";

import {
  SelectActivity,
  SelectCount,
  SelectPeriod,
  SelectExceptDate,
  ProgressBar,
  ButtonLayout,
} from "components";
import { ArrowIcon } from "assets";
import { useModal, useToast } from "hooks";
import { CreateLuckyDayModal } from "./container";
import * as S from "./CreateLuckyDayPage.styled";

function CreateLuckyDayPage() {
  const [currentProgress, setCurrentProgress] = useState(0);

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
        return <SelectActivity />;
      case 1:
        return <SelectPeriod />;
      case 2:
        return <SelectCount />;
      case 3:
        return <SelectExceptDate />;
    }
  };

  const handleClickNextButton = () => {
    if (currentProgress !== 3) return changeCurrentProgress(+1)();

    handleOpenModal(<CreateLuckyDayModal />);
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
