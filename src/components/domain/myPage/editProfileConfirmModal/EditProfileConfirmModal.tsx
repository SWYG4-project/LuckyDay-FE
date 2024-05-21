import * as S from "./EditProfileConfirmModal.styled";
import { useTheme } from "@emotion/react";
import { BaseModal, SvgButton } from "components/common";
import { ShortBoxIcon } from "assets";

interface EditProfileConfirmModalProps {
  onClose: () => void;
  onSave: () => void;
  email: string;
}

export default function EditProfileConfirmModal({
  onClose,
  onSave,
  email,
}: EditProfileConfirmModalProps) {
  const theme = useTheme();

  const handleConfirmClick = () => {
    onSave();
    onClose();
  };

  return (
    <>
      <BaseModal>
        <S.ModalContainer>
          <S.Text_h1>프로필 설정 확인</S.Text_h1>
          <S.Logo_Basic />
          <S.Text_h2>
            변경된 메일 주소 <br />
            <S.Email>{email}</S.Email>으로 <br />
            럭키 데이 전날에 알림 메일이 발송됩니다.
          </S.Text_h2>
          <S.ButtonBox>
            <SvgButton
              label={"취소"}
              onClick={onClose}
              icon={<ShortBoxIcon />}
              width="100px"
              height="42px"
            ></SvgButton>
            <SvgButton
              label={"확인"}
              onClick={handleConfirmClick}
              icon={<ShortBoxIcon />}
              textColor={theme.colors.white}
              fillColor={theme.colors.purple}
              width="100px"
              height="42px"
            ></SvgButton>
          </S.ButtonBox>
        </S.ModalContainer>
      </BaseModal>
    </>
  );
}
