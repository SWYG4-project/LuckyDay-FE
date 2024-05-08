import React from "react";

import { useModal } from "hooks";
import { CloseIcon } from "assets";
import { BaseModal } from "../baseModal";
import * as S from "./ConfirmModal.styled";

interface ConfirmModalProps {
  className?: string;
  title: string;
  subTitle?: string;
  icon?: React.ReactNode;
  desc?: string;
  cancelLabel?: string;
  baseLabel: string;
  handleCancelClick?: (e: React.MouseEvent) => void;
  handleBaseClick: (e: React.MouseEvent) => void;
}

const ConfirmModal = React.forwardRef(
  (
    {
      className,
      title,
      subTitle,
      icon,
      desc,
      cancelLabel,
      baseLabel,
      handleCancelClick,
      handleBaseClick,
    }: ConfirmModalProps,
    ref: React.ForwardedRef<HTMLDialogElement>
  ) => {
    const { handleModalClose } = useModal();

    /* TODO: font 사이즈 통일 요청함 추후 확인 필요 */
    return (
      <BaseModal ref={ref} css={S.baseModal} className={className}>
        {!cancelLabel && <CloseIcon css={S.icon} onClick={handleModalClose} />}
        <div>
          <S.Title>{title}</S.Title>
          {subTitle ? (
            <S.CenterContent>
              {/* TODO: 이미지 변경 예정 */}
              <img src="public/images/empty.png" alt="empty" />
              <S.SubTitle>{subTitle}</S.SubTitle>
            </S.CenterContent>
          ) : (
            <>{icon}</>
          )}
          <S.Desc>{desc}</S.Desc>
        </div>
        <S.ButtonWrapper>
          {/* TODO: 버튼 컴포넌트로 변경 후 수정 예정 */}
          {cancelLabel && (
            <button onClick={handleCancelClick}>{cancelLabel}</button>
          )}
          <button onClick={handleBaseClick}>{baseLabel}</button>
        </S.ButtonWrapper>
      </BaseModal>
    );
  }
);

ConfirmModal.displayName = "ConfirmModal";

export default ConfirmModal;
