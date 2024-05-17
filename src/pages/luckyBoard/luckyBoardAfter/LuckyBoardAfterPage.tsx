import * as S from "./LuckyBoardAfterPage.styled";
import { useModal } from "hooks";
import { getCurrentDate } from "utils/date";
import { ArchiveModal, ButtonLayout, LuckyBalls } from "components";

export default function LuckyBoardAfterPage() {
  const { handleOpenModal } = useModal();
  console.log(getCurrentDate());

  const handleClickFirstButton = () => {
    handleOpenModal(<ArchiveModal />);
  };

  const handleSecondButtonClick = () => {};

  return (
    <>
      {/* FIX: API 연결 예정입니다. */}
      <ButtonLayout
        variant="hasColor"
        firstLabel={"지난 럭키데이"}
        secondLabel={"더보기"}
        handleClickFirstButton={handleClickFirstButton}
        handleClickSecondButton={handleSecondButtonClick}
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
