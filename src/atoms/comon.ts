import { atom } from "recoil";

export const modalState = atom<React.ReactNode[] | []>({
  key: "modalState/modal",
  default: [],
});

export const isLoggedInAtom = atom<boolean>({
  key: "isLoggedInAtom",
  default: false,
});
