import React from "react";

import * as S from "./BaseModal.styled";

interface BaseModalProps {
  className?: string;
  children?: React.ReactNode;
}

const BaseModal = React.forwardRef(
  (
    { className, children }: BaseModalProps,
    ref: React.ForwardedRef<HTMLDialogElement>
  ) => {
    return (
      <S.BaseModal
        ref={ref}
        className={className}
        aria-modal="true"
        tabIndex={0}
      >
        {children}
      </S.BaseModal>
    );
  }
);

BaseModal.displayName = "BaseModal";

export default BaseModal;
