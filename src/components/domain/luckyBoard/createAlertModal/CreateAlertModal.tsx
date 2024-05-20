import * as S from "./CreateAlertModal.styled";
import { useTheme } from "@emotion/react";
import { BaseModal, SvgButton } from "components/common";
import { ShortBoxIcon } from "assets";

interface CreateAlertModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function CreateAlertModal({
  onClose,
  onConfirm,
}: CreateAlertModalProps) {
  const theme = useTheme();

  return (
    <BaseModal>
      <S.ModalContainer>
        <S.Text_h1>럭키 데이 생성</S.Text_h1>
        <S.Logo_Basic />
        <S.Text_h2>
          새로운 럭키 데이 생성을 시작하면 <br />
          지난 럭키 데이 아이콘들은 <br />
          럭키 데이 보관함으로 이동합니다.
        </S.Text_h2>
        <S.ButtonBox>
          <SvgButton
            label="취소"
            onClick={onClose}
            icon={<ShortBoxIcon />}
            width="100px"
            height="42px"
          ></SvgButton>
          <SvgButton
            label="계속"
            onClick={onConfirm}
            icon={<ShortBoxIcon />}
            textColor={theme.colors.white}
            fillColor={theme.colors.purple}
            width="100px"
            height="42px"
          ></SvgButton>
        </S.ButtonBox>
      </S.ModalContainer>
    </BaseModal>
  );
}
