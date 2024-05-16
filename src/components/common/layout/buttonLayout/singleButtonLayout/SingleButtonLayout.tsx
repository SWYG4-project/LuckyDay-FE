import React from "react";
import * as S from "./SingleButtonLayout.styled";
import { SvgFrame } from "components/common/svgFrame";
import { ArrowIcon, CircleBoxIcon } from "assets";

interface SingleButtonLayoutProps {
  className?: string;
  children: React.ReactNode;
}

function SingleButtonLayout({ className, children }: SingleButtonLayoutProps) {
  const handleClickBackPath = (): void => {
    window.history.back();
  };

  return (
    <S.SingleButtonLayout className={className}>
      <S.Body>{children}</S.Body>
      <S.ButtonWrapper>
        <S.Button onClick={handleClickBackPath}>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <ArrowIcon css={S.arrowIcon} />
        </S.Button>
      </S.ButtonWrapper>
    </S.SingleButtonLayout>
  );
}

export default SingleButtonLayout;
