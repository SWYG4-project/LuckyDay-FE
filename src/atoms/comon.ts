import { atom } from "recoil";

export const modalState = atom<React.ReactNode[] | []>({
  key: "modalState/modal",
  default: [],
});
