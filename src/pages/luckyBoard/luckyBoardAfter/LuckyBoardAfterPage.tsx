import * as S from "./LuckyBoardAfterPage.styled";
import { ButtonLayout, SvgFrame } from "components";
import { getCurrentDate } from "utils/date";
import { LuckyBalls } from "components/domain/luckyBoard";

export default function LuckyBoardAfterPage() {
  console.log(getCurrentDate());
  return (
    <>
      {/* FIX: API 연결 예정입니다. */}
      <ButtonLayout
        variant={"hasColor"}
        firstLabel={"지난 럭키데이"}
        secondLabel={"더보기"}
      >
        <S.Container>
          <S.TextBox>{getCurrentDate()}</S.TextBox>
          <S.LuckyMachine>
            <LuckyBalls />
            <SvgFrame icon={undefined} />
          </S.LuckyMachine>
        </S.Container>
      </ButtonLayout>
    </>
  );
}
