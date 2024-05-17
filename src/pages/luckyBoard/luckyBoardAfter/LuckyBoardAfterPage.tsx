import * as S from "./LuckyBoardAfterPage.styled";
import { getCurrentDate } from "utils/date";
import { ButtonLayout, LuckyBalls } from "components";

export default function LuckyBoardAfterPage() {
  console.log(getCurrentDate());
  return (
    <>
      {/* FIX: API 연결 예정입니다. */}
      <ButtonLayout
        variant="hasColor"
        firstLabel={"지난 럭키데이"}
        secondLabel={"더보기"}
      >
        <S.Container>
          <S.TextBox>{getCurrentDate()}</S.TextBox>
          <S.LuckyMachine>
            <LuckyBalls />
          </S.LuckyMachine>
        </S.Container>
      </ButtonLayout>
    </>
  );
}
