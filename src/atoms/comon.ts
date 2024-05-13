import { atom } from "recoil";

import type { Toast } from "types";

export const modalState = atom<React.ReactNode[] | []>({
  key: "modalState/modal",
  default: [],
});

export const toastState = atom<Toast[]>({
  key: "toastState",
  default: [],
});
