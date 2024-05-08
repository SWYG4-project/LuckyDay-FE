import React from "react";
import { useRecoilState } from "recoil";

import { modalState } from "atoms";
import ModalPortal from "../portal/ModalPortal";
import * as S from "./Modal.styled";

function Modal() {
  const [modalComp] = useRecoilState(modalState);

  return (
    <ModalPortal>
      {modalComp && modalComp.map((item) => <S.Modal>{item}</S.Modal>)}
    </ModalPortal>
  );
}

export default Modal;
