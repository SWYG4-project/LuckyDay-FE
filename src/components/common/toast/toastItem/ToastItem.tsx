import { useEffect, useState } from "react";

import { useToast } from "hooks";
import type { Toast } from "types";
import * as S from "./ToastItem.styled";

function ToastItem({ id, content }: Toast) {
  const [isClosing, setIsClosing] = useState(false);

  const { removeToast } = useToast();

  const DURATION = 4000;
  const EXPIRE_DURATION = 2000;

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true);
    }, DURATION);

    const expireTimeout = setTimeout(() => {
      removeToast(id);
    }, EXPIRE_DURATION);

    return () => {
      clearTimeout(setExistTimeout);
      clearTimeout(expireTimeout);
    };
  });

  return (
    <S.ToastItem isClosing={isClosing}>
      <div>{content}</div>
    </S.ToastItem>
  );
}

export default ToastItem;
