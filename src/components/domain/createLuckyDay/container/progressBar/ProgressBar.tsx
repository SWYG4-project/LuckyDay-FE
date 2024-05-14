import React from "react";

import * as S from "./ProgressBar.styled";

interface ProgressBarProps {
  progressState: number;
}

function ProgressBar({ progressState }: ProgressBarProps) {
  const progress = [
    { state: 1, label: "활동 선택" },
    { state: 2, label: "기간 선택" },
    { state: 3, label: "개수 선택" },
    { state: 4, label: "제외 날짜" },
  ] as const;

  return (
    <S.ProgressBar>
      {progress.map((item) => (
        <S.SingleProgress key={item.label}>
          <S.ProgressState state={progressState + 1 === item.state}>
            {item.state}
          </S.ProgressState>
          <div>{item.label}</div>
        </S.SingleProgress>
      ))}
    </S.ProgressBar>
  );
}

export default ProgressBar;
