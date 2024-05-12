import { useRecoilValue } from "recoil";

import { toastState } from "atoms";
import { ToastItem } from "./toastItem";
import * as S from "./Toast.styled";

function Toast() {
  const toasts = useRecoilValue(toastState);

  return (
    <S.Toast>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </S.Toast>
  );
}

export default Toast;
