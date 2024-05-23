import * as S from "./LuckyBoardBeforePage.styled";
import { useNavigate } from "react-router-dom";
import { useModal } from "hooks";
import {
  CreateAlertModal,
  CreateLuckyDayButton,
} from "components/domain/luckyBoard";
import { GetLuckyDayCycleServerModel } from "types";

interface LuckyBoardBeforePageProps {
  data?: GetLuckyDayCycleServerModel;
}

export default function LuckyBoardBeforePage({
  data,
}: LuckyBoardBeforePageProps) {
  const { handleOpenModal, handleModalClose } = useModal();
  const navigate = useNavigate();

  const handleConfirm = () => {
    handleModalClose();
    navigate("/create");
  };

  const openCreateAlertModal = () => {
    if (!data) sessionStorage.setItem("hasLuckyday", "0");

    handleOpenModal(
      <CreateAlertModal onClose={handleModalClose} onConfirm={handleConfirm} />
    );
  };

  return (
    <S.Container>
      <S.TextBox>
        아직 만들어진 럭키 데이가 없어요. <br />
        클릭해서 럭키 데이를 만들어 보세요.
      </S.TextBox>
      <S.LuckyMachine>
        <CreateLuckyDayButton onClick={openCreateAlertModal} />
      </S.LuckyMachine>
    </S.Container>
  );
}
