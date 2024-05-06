import React from "react";

import * as S from "./ButtonLayout.styled";

interface ButtonLayoutProps {
  className?: string;
  variant: "hasIcon" | "hasColor"; //NOTE: 적절한 네이밍으로 변경 필요
  firstLabel: string;
  secondLabel?: string;
  icon?: React.ReactNode;
  handleClickFirstButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickSecondButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

function ButtonLayout({
  className,
  variant,
  firstLabel,
  secondLabel,
  icon,
  handleClickFirstButton,
  handleClickSecondButton,
  children,
}: ButtonLayoutProps) {
  return (
    <S.ButtonLayout className={className}>
      <S.Body>{children}</S.Body>
      <S.ButtonWrapper>
        <S.Button variant={variant} onClick={handleClickFirstButton}>
          <S.Img src="images/img_small_beige.png" />
          <S.ButtonBox variant={variant}>
            {icon && icon}
            {firstLabel}
          </S.ButtonBox>
        </S.Button>
        <S.Button onClick={handleClickSecondButton}>
          <S.Img
            src={
              variant === "hasIcon"
                ? "images/img_small_beige.png"
                : "images/img_small_orange.png"
            }
          />
          <S.ButtonBox isSecond variant={variant}>
            {secondLabel}
            {/* TODO: 추후 확인 필요 */}
            {icon && icon}
          </S.ButtonBox>
        </S.Button>
      </S.ButtonWrapper>
    </S.ButtonLayout>
  );
}

export default ButtonLayout;
