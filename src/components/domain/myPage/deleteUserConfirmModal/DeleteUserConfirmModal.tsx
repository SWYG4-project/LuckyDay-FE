import * as S from "./DeleteUserConfirmModal.styled";
import { useTheme } from "@emotion/react";
import { BaseModal, SvgButton } from "components/common";
import { ShortBoxIcon } from "assets";

interface DeleteUserConfirmModalProps {
  onDelete: () => void;
}

export default function DeleteUserConfirmModal({
  onDelete,
}: DeleteUserConfirmModalProps) {
  const theme = useTheme();

  return (
    <>
      <BaseModal>
        <S.ModalContainer>
          <S.Text_h1>정말로 탈퇴하시겠어요?</S.Text_h1>
          <S.Logo_Sad />
          <S.Text_h2>
            그동안의 모든 럭키 데이 기록과 <br />
            회원 정보가 삭제됩니다. <br />
            삭제된 정보는 복구할 수 없습니다.
          </S.Text_h2>
          <S.ButtonBox>
            <SvgButton
              label={"취소"}
              icon={<ShortBoxIcon />}
              width="100px"
              height="42px"
            ></SvgButton>
            <SvgButton
              label={"회원 탈퇴"}
              onClick={onDelete}
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
