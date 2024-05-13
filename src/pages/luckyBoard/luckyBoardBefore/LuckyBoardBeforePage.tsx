import * as S from "./LuckyBoardBeforePage.styled";
import { CreateLuckyDayButton } from "components/domain/luckyBoard";

export default function LuckyBoardBeforePage() {
  return (
    <>
      <S.Container>
        <S.TextBox>
          아직 만들어진 럭키 데이가 없어요. <br />
          클릭해서 럭키 데이를 만들어 보세요.
        </S.TextBox>
        <S.LuckyMachine>
          <CreateLuckyDayButton />
        </S.LuckyMachine>
      </S.Container>
    </>
  );
}
