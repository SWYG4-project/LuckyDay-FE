import React from "react";
import * as S from "./Header.styled";
import { Logo } from "components/common/Logo";
import "../../../../fonts/index.css";

export default function Header() {
  return (
    <>
      <S.Header>
        <Logo />
        <p className="headline">Lucky Day</p>
      </S.Header>
    </>
  );
}