import React from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

export const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById("modal");

  if (!el) return;

  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
