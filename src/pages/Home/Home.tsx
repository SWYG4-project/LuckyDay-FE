import { Input } from "components";
import { MenuIcon } from "assets";
import * as S from "./Home.styled";

export default function Home() {
  return (
    <S.Home>
      <Input placeholder="input 칸 입니다" />
      <MenuIcon css={S.menuIcon} />
    </S.Home>
  );
}
