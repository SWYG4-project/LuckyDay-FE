import { useSetRecoilState } from "recoil";

import { toastState } from "atoms";
import type { Toast } from "types";

function useToast() {
  const setToast = useSetRecoilState(toastState);

  const removeToast = (toastId: Toast["id"]) =>
    setToast((prev) => prev.filter((toast) => toast.id !== toastId));

  const getRandomID = (): string => String(new Date().getTime());

  const addToast = (toast: Toast): void => {
    setToast((prev) => [...prev, { ...toast, id: getRandomID() }]);
  };

  return { removeToast, addToast };
}

export default useToast;
