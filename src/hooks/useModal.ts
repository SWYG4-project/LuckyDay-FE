import React from "react";
import { useRecoilState } from "recoil";

import { modalState } from "atoms";

function useModal() {
  const [modalComp, setModalComp] = useRecoilState(modalState);

  const handleOpenModal = (modal: React.ReactNode) => {
    const newModal = [...modalComp];
    newModal.push(modal);
    setModalComp(newModal);
  };

  const handleModalClose = () => {
    const newModal = [...modalComp];
    newModal.pop();
    setModalComp(newModal);
  };

  return { handleOpenModal, handleModalClose };
}

export default useModal;
