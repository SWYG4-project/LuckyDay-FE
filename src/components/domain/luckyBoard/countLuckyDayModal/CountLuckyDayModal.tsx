import * as S from "./CountLuckyDayModal.styled";
import { useTheme } from "@emotion/react";
import { ConfirmModal, SvgButton } from "components/common";
import { LargeBoxIcon } from "assets";

interface CountLuckyDayModalProps {
  label?: string;
  onClose: () => void;
}

export default function CountLuckyDayModal({
  onClose,
  label = "아직 럭키 데이를 확인할 수 없어요.\n 조금만 기다려주세요.",
}: CountLuckyDayModalProps) {
  const theme = useTheme();

  const handleConfirmClick = () => {
    onClose();
  };

  return (
    <>
      <ConfirmModal
        css={S.modal}
        baseLabel="OK"
        handleBaseClick={handleConfirmClick}
      >
        <SvgButton
          label={label}
          onClick={handleConfirmClick}
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
