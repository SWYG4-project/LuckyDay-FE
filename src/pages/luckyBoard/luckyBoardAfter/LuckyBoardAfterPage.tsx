import * as S from "./LuckyBoardAfterPage.styled";
import dayjs from "dayjs";

import { LuckyBalls } from "components";

export default function LuckyBoardAfterPage() {
  return (
    <S.Container>
      <S.TextBox>{dayjs().format("YYYY년 MM월 DD일")}</S.TextBox>
      <S.LuckyMachine>
        <LuckyBalls />
      </S.LuckyMachine>
    </S.Container>
  );
}
