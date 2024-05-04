import React from "react";
import { Logo } from "components/common/logo";
import * as S from "./Header.styled";

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
