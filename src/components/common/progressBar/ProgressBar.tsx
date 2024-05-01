import React from "react";

import * as S from "./ProgressBar.styled";

interface ProgressBarProps {
  progressState: number;
}

function ProgressBar({ progressState }: ProgressBarProps) {
  return <S.ProgressBar>{progressState}</S.ProgressBar>;
}

export default ProgressBar;
