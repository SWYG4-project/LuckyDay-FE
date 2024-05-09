import React from "react";

import * as S from "./SvgFrame.styled";

interface SvgFramProps {
  className?: string;
  icon: React.ReactNode;
}

function SvgFrame({ className, icon }: SvgFramProps) {
  return <S.SvgFrame className={className}>{icon}</S.SvgFrame>;
}

export default SvgFrame;
