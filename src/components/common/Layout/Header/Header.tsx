import React from "react";
import * as S from "./Header.styled";
import { Logo } from "components/common/Logo";

export default function Header() {
  return (
    <>
      <S.Header>
        <Logo />
        <S.LogoText className="headline">Lucky Day</S.LogoText>
      </S.Header>
    </>
  );
}
