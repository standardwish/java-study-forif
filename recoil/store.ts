import { atom } from "recoil";

export const navState = atom({
  key: "navState",
  default: false,
});

export const modalState = atom({
  key: "modalState",
  default: false,
});
