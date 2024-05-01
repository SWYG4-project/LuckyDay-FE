import React, { useState } from "react";

import { ProgressBar } from "components";
import SelectActivity from "./selectActivity/SelectActivity";
import SelectCount from "./selectCount/SelectCount";
import SelectPeriod from "./selectPeriod/SelectPeriod";
import SelectExceptDay from "./selectExceptDay/SelectExceptDay";
import * as S from "./CreateLuckyDay.styled";

function CreateLuckyDay() {
  const [currentProgress, setCurrentProgress] = useState(0);

  const changeCurrentProgress = (progress: number) => (): void => {
    const changedProgress = currentProgress + progress;

    if (changedProgress > 3 || changedProgress < 0) return console.log("err");

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
        return <SelectExceptDay />;
    }
  };

  return (
    <S.CreateLuckyDay>
      <ProgressBar progressState={currentProgress} />
      {changePage(currentProgress)}
      <S.ButtonWrapper>
        <button onClick={changeCurrentProgress(-1)}>prev</button>
        <button onClick={changeCurrentProgress(+1)}>next</button>
      </S.ButtonWrapper>
    </S.CreateLuckyDay>
  );
}

export default CreateLuckyDay;
