import * as S from "./ResetLuckyBoardModal.styled";
import { useTheme } from "@emotion/react";
import { ConfirmModal, SvgButton } from "components";
import { LargeBoxIcon } from "assets";

interface ResetLuckyBoardModalProps {
  label?: string;
  onClose: () => void;
  onReset: () => void;
}

export default function ResetLuckyBoardModal({
  label = "럭키 보드에 생성되어 있는 \n 모든 럭키 데이가 삭제되고, \n 럭키 보드가 초기화됩니다. \n 삭제된 정보는 복구할 수 없습니다.",
  onClose,
  onReset,
}: ResetLuckyBoardModalProps) {
  const theme = useTheme();

  const handleCancelClick = () => {
    onClose();
  };

  const handleResetlick = () => {
    onReset();
    onClose();
  };

  return (
    <>
      <ConfirmModal
        css={S.modal}
        title="럭키보드를 초기화하시겠어요?"
        cancelLabel="취소"
        baseLabel="초기화"
        handleCancelClick={handleCancelClick}
        handleBaseClick={handleResetlick}
      >
        <SvgButton
          label={label}
          icon={<LargeBoxIcon />}
          textColor={theme.colors.black}
          fillColor={theme.colors.lightPurple}
          width="240px"
          height="200px"
        ></SvgButton>
      </ConfirmModal>
    </>
  );
}
