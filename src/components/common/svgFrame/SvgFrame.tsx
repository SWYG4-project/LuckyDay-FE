import React from "react";

import * as S from "./SvgFrame.styled";

interface SvgFramProps {
  className?: string;
  children: React.ReactNode;
}

function SvgFrame({ className, children }: SvgFramProps) {
  return <S.SvgFrame className={className}>{children}</S.SvgFrame>;
}

export default SvgFrame;
