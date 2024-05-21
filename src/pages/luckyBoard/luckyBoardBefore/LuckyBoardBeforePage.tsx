import * as S from "./LuckyBoardBeforePage.styled";
import { useNavigate } from "react-router-dom";
import { useModal, useToast } from "hooks";
import { ArchiveModal, ButtonLayout } from "components";
import {
  CreateAlertModal,
  CreateLuckyDayButton,
} from "components/domain/luckyBoard";

export default function LuckyBoardBeforePage() {
  const { handleOpenModal, handleModalClose } = useModal();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleConfirm = () => {
    handleModalClose();
    navigate("/create");
  };

  const openCreateAlertModal = () => {
    handleOpenModal(
      <CreateAlertModal onClose={handleModalClose} onConfirm={handleConfirm} />
    );
  };

  const handleClickFirstButton = () => {
    handleOpenModal(<ArchiveModal />);
  };

  const handleSecondButtonClick = () => {
    addToast({ content: "진행 중인 럭키 데이 정보가 없어요." });
  };

  return (
    <>
      <ButtonLayout
        variant="hasColor"
        firstLabel={"지난 럭키데이"}
        secondLabel={"더보기"}
        handleClickFirstButton={handleClickFirstButton}
        handleClickSecondButton={handleSecondButtonClick}
      >
        <S.Container>
          <S.TextBox>
            아직 만들어진 럭키 데이가 없어요. <br />
            클릭해서 럭키 데이를 만들어 보세요.
          </S.TextBox>
          <S.LuckyMachine>
            <CreateLuckyDayButton onClick={openCreateAlertModal} />
          </S.LuckyMachine>
        </S.Container>
      </ButtonLayout>
    </>
  );
}
